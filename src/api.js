const path = require("path");
const child_process = require("child_process");
const spawn = child_process.spawn;

const settings = require("./settings");
const NODE_ENV = process.env.NODE_ENV;
let NODE_PATH = `${settings.serverRoot}:${path.join(settings.serverRoot, "src")}`;

// const project

module.exports.pullSourceCode = function pullSourceCode(){
	spawn(`cd ${settings.server.workingDirectory} && npm run pull-source-code`, 
		{ shell: true, stdio:"inherit", env: { NODE_ENV: NODE_ENV, NODE_PATH: NODE_PATH, ...process.env } }
	);
}

module.exports.restartServer = function restartServer(){
	spawn(`cd ${settings.server.workingDirectory} && npm run restart-server`, 
	{ shell: true, env: { NODE_ENV: NODE_ENV, NODE_PATH: NODE_PATH, ...process.env } }
	);
}

module.exports.buildServer = function buildServer(){
	spawn(`cd ${settings.server.workingDirectory} && npm run build-server`, 
	{ shell: true, env: { NODE_ENV: NODE_ENV, NODE_PATH: NODE_PATH, ...process.env } }
	);
}

module.exports.buildClient = function buildClient(){
	spawn(`cd ${settings.client.workingDirectory} && npm run build-client`, 
	{ shell: true, env: { NODE_ENV: NODE_ENV, NODE_PATH: NODE_PATH, ...process.env } }
	);
}
