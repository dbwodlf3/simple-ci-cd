# What is this
This is just ui interaction tool for traditional simple ci cd(with scripts).

# How to use

## Settings

There are two settings file.

1. src/server/settings.json
  - settings.security.userId
    This is used for login simple ci cd
  - settings.security.userPw
    This is also used for login simple ci cd
  
2. scripts/common.js
	- common.server.workingDirectory
    This is a working directory for CI/CD. ex) "~"
	- common.server.serverDirectory
    This is a server repository. CI/CD. ex) "~/project/server"
	- common.server.clientDirectory
    This is a client repository. CI/CD. ex) "~/project/client"
	- common.server.gitSSH
    This is a ssh user name in ~/.ssh/config

	- common.server.serverRepository
	- common.server.dockerDirectory


## Pull Source Code
  you have to make deploy key in github with sshkey.
  and set your ssh configure with ssh user.

  See more info -

## Restart Server

## Docker File
  You have to write docker compose file for start, stop, restart.

# Dependency

- docker
- docker-compose
- git
- github
