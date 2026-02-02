import {lib,game,ui,get,ai,_status} from '../../../noname.js'
//不用动，都写好了，当然，您要是大佬可以无视我的话。
let basicPath = lib.init.getCurrentFileLocation(import.meta.url);

const basic={
    extensionDirectoryPath:basicPath.slice(0,basicPath.lastIndexOf('source/basic.js'))
};

export default basic;