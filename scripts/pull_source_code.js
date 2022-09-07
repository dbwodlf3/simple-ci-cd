const path = require("path");
const child_process = require("child_process");
const common = require("./common").common;
const spawn = child_process.spawn;

const NODE_ENV = "develop";

const srcPath = path.join(common.serverRoot, "src");
let NODE_PATH = `${common.serverRoot}:${srcPath}`;

if(process.platform == 'win32')  {
    NODE_PATH = `${common.serverRoot};${srcPath};`;    
}
else {
    NODE_PATH = `${common.serverRoot}:${srcPath}`;
}

spawn(`cd ${common.server.serverDirectory} && git pull`, 
    { shell: false,  env: { NODE_ENV: NODE_ENV, NODE_PATH: NODE_PATH, ...process.env } }
);
