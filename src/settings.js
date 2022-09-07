const path = require("path");


const settings = {
    hostname: "127.0.0.1",
    port: "3322",
    projectRoot: path.resolve(path.dirname(path.dirname(__dirname))),
    serverRoot: path.resolve(path.dirname(__dirname)),
    security : {
        shaKey: "simple-ci-cd",
        jwtKey: "simple-ci-cd",
        jwtSecretKey: "simple-ci-cid",
        sessionKey: "simple-ci-cd",
        userId: "simple-ci-cd",
        userPw: "simple-ci-cd"
    },
    cdn : {
        path: "/static"
    },
    domains: {
        default: "localhust"
    },
    server: {
        workingDirectory: "~",
        serverDirectory: "",
        clientDirectory: "",
        dockerDirectory: "",
    }
}

module.exports = settings;
