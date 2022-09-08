# What is this
This is just ui interaction tool for traditional simple ci cd(with scripts).

# Quick start
```
git clone https://github.com/dbwodlf3/simple-ci-cd.git
cd simple-ci-cd
npm i
npm run start-dev
```

# How to use

first you need to write some scripts and configure settings variables.

## SSH
```ssh-keygen -t rsa -b 2048 -f ~/.ssh/your_key```

```sh
# ~/.ssh/config
Host github.com
     HostName github.com
     User git
     IdentityFile ~/.ssh/your_key
     IdentitiesOnly yes
     Port 22
```

## Settings

There are two settings file.

1. src/server/settings.json
	- settings.security.userId
		This is used for login simple ci cd
	- settings.security.userPw
		This is also used for login simple ci cd
	
1. scripts/common.js
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

# Life Cycle

Pull Source Code -> 
	Run Shell Script ->
		cd settings.server.serverDirectory ->
			npm run pull-source-code

Restart Server -> 
	Run Shell Script ->
		cd settings.server.serverDirectory ->
			npm run resetart-server

Build Server ->
	Run Shell Script ->
		cd settings.server.serverDirectory ->
			npm run build-server

Build Client ->
	Run Shell Script ->
		cd settings.client.clientDirectory ->
			npm run build-client

# Dependency

- docker
- docker-compose
- git
- github
