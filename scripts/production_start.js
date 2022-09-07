const path = require("path");
const child_process = require("child_process");
const common = require("./common").common;
const spawn = child_process.spawn;

const NODE_ENV = "production";

const srcPath = path.join(common.serverRoot, "src");
let NODE_PATH = `${common.serverRoot}:${srcPath}`;

if(process.platform == 'win32')  {
    NODE_PATH = `${common.serverRoot};${srcPath};`;    
}
else {
    NODE_PATH = `${common.serverRoot}:${srcPath}`;
}

spawn(`cd ${common.serverRoot} && \
    node index.js`, 
    { shell: true, stdio: 'inherit', env: { NODE_ENV: NODE_ENV, NODE_PATH: NODE_PATH, ...process.env } }
);
