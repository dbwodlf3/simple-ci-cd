const path = require("path");

const projectRoot = path.resolve(path.dirname(__dirname));
const serverRoot = path.join(projectRoot, "src");

exports.common = {
	projectRoot: projectRoot,
	serverRoot: serverRoot,
    server: {
        workingDirectory: "~",
        serverDirectory: "~/server",
        clientDirectory: "~/client",
		gitSSH: "git",
		serverRepository: "", /** ex) git-user/repo.git*/
		dockerDirectory: ""
    }
}
