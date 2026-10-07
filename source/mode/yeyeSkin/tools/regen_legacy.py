# -*- coding: utf-8 -*-
"""
永夜将临 · 旧样式层生成器

从「转正前原样式快照」tools/yy_original_style.css + 「当前新样式」../style.css，
重新生成 ../skin.css 里分界线以下的规则体。

- 只写 ../skin.css，**绝不改动 ../style.css**
- 分界线以上（头部注释、字体变量、::after / ::before 复位、档位映射、超出上限
  标红、拖拽落点）是手工维护的固定部分，脚本原样保留
- 可反复运行：未做改动时重跑，skin.css 应逐字节不变（脚本会自报结果）

用法：
    python tools/regen_legacy.py
"""

import io
import os
import re

TOOLS = os.path.dirname(os.path.abspath(__file__))
LEGACY_DIR = os.path.dirname(TOOLS)              # .../source/mode/yeyeSkin
MODE_DIR = os.path.dirname(LEGACY_DIR)           # .../source/mode
SNAPSHOT = os.path.join(TOOLS, 'yy_original_style.css')
STYLE = os.path.join(MODE_DIR, 'style.css')
SKIN = os.path.join(LEGACY_DIR, 'skin.css')

# 分界线：这一行之后的内容由本脚本生成
MARKER_TAIL = '手工修改会在下次重新生成时被覆盖'

# 旧样式层跟踪的属性：只有这 8 个会被还原，其余一概不管
WHITELIST = ['background-image', 'background-size', 'background-position',
             'background-repeat', 'background-color', 'color', 'border-radius',
             'box-shadow']

# 新样式声明了、但原样式没声明的属性，需要显式复位成初始值
RESET = {
    'box-shadow': 'none',
    'background-color': 'transparent',
    'border-radius': '0',
    'background-size': 'auto',
    'background-position': '0% 0%',
    'background-repeat': 'repeat',
    'color': 'inherit',
    'background-image': 'none',
}


def parse_rules(text):
    """把 CSS 解析成 {选择器: {属性: 值}}；同一条规则里同名属性后写的生效。"""
    text = re_sub_comments(text)
    rules = {}
    for m in re.finditer(r'([^{}]+)\{([^{}]*)\}', text):
        sels = [s.strip() for s in m.group(1).split(',') if s.strip()]
        decls = {}
        for decl in m.group(2).split(';'):
            if ':' in decl:
                k, v = decl.split(':', 1)
                k, v = k.strip().lower(), v.strip()
                if k and v:
                    decls[k] = v
        for sel in sels:
            rules.setdefault(sel, {}).update(decls)
    return rules


def is_base_selector(sel):
    """只处理单类名的 .yeye_xxx：伪元素与 .yy-tier-* 等交给分界线以上的固定部分。"""
    return sel.startswith('.yeye_') and '::' not in sel and '.yy-tier-' not in sel


def re_sub_comments(text):
    return re.sub(r'/\*.*?\*/', '', text, flags=re.S)


def main():
    for path in (SNAPSHOT, STYLE, SKIN):
        if not os.path.exists(path):
            raise SystemExit('找不到文件：%s' % path)

    snapshot = io.open(SNAPSHOT, encoding='utf-8').read()
    style = io.open(STYLE, encoding='utf-8').read()
    skin = io.open(SKIN, encoding='utf-8').read()

    # 1) 保留分界线以上（含分界行）
    skin_lines = skin.split('\n')
    cut = None
    for i, line in enumerate(skin_lines):
        if MARKER_TAIL in line:
            cut = i
            break
    if cut is None:
        raise SystemExit('skin.css 里找不到分界线注释（含「%s」的那一行），无法安全重写。' % MARKER_TAIL)
    head = skin_lines[:cut + 1]

    # 2) 解析两份样式
    old_rules = parse_rules(snapshot)
    new_rules = parse_rules(style)

    # 3) 需要旧层还原的选择器：原样式里用过位图的 + 新样式里出现过的
    affected = set()
    for sel, decls in old_rules.items():
        if is_base_selector(sel) and 'url(' in decls.get('background-image', ''):
            affected.add(sel)
    for sel in new_rules:
        if is_base_selector(sel):
            affected.add(sel)

    # 4) 逐条生成
    body = []
    skipped = []
    for sel in sorted(affected):
        old = old_rules.get(sel)
        if not old:
            skipped.append(sel)
            continue
        new = new_rules.get(sel, {})
        lines = []
        for prop in WHITELIST:
            if prop in old:
                value = old[prop]
                if prop == 'background-image':
                    # 本文件在 yeyeSkin/ 下，位图路径要回上一层
                    value = value.replace('url(image/', 'url(../image/')
                lines.append('\t%s: %s;' % (prop, value))
            elif prop in new:
                lines.append('\t%s: %s;' % (prop, RESET[prop]))
        if not lines:
            continue
        body.append('')
        body.append('body.yeye-legacy %s {' % sel)
        body.extend(lines)
        body.append('}')

    content = '\n'.join(head) + '\n' + '\n'.join(body) + '\n'

    changed = (content != skin)
    if changed:
        io.open(SKIN, 'w', encoding='utf-8', newline='').write(content)

    print('基准快照 : %s' % os.path.relpath(SNAPSHOT, MODE_DIR))
    print('当前新样式: %s' % os.path.relpath(STYLE, MODE_DIR))
    print('生成目标 : %s' % os.path.relpath(SKIN, MODE_DIR))
    print('生成规则 : %d 条（无对应原规则的 %d 个选择器已跳过）'
          % (len([l for l in body if l.startswith('body.yeye-legacy ')]), len(skipped)))
    print('结果     : %s' % ('已更新 skin.css' if changed else '未变化（逐字节一致，幂等 OK）'))


if __name__ == '__main__':
    main()
