const path = require("path");
const child_process = require("child_process");
const spawn = child_process.spawn;

const settings = require("./settings");

// const project

module.exports.pullSourceCode = function pullSourceCode(){
	spawn(`cd ${settings.server.serverDirectory} && npm run pull-source-code`, 
	{ shell: false, env: { NODE_ENV: NODE_ENV, NODE_PATH: NODE_PATH, ...process.env } }
	);
}

module.exports.restartServer = function restartServer(){
	spawn(`cd ${settings.server.serverDirectory} && npm run restart-server`, 
	{ shell: false, env: { NODE_ENV: NODE_ENV, NODE_PATH: NODE_PATH, ...process.env } }
	);
}

module.exports.buildServer = function buildServer(){
	spawn(`cd ${settings.server.serverDirectory} && npm run build-server`, 
	{ shell: false, env: { NODE_ENV: NODE_ENV, NODE_PATH: NODE_PATH, ...process.env } }
	);
}

module.exports.buildClient = function buildClient(){
	spawn(`cd ${settings.server.serverDirectory} && npm run build-client`, 
	{ shell: false, env: { NODE_ENV: NODE_ENV, NODE_PATH: NODE_PATH, ...process.env } }
	);
}
