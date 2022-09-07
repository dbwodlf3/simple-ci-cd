const express = require("express");

let _count = 0;
let ips = {};

setInterval(()=>{
	_count = 0;
	ips = {};
}, 1000*60*10);

/**
  * @param {express.Request} req
*/
exports.userLoginLimit = function userMiddleware (req, res, next){
	if(req.user) { 
		next();
	}
	else {
		if(ips[req.ip]) { 
			_count = _count + 1;
			if(ips[req.ip]) ips[req.ip]++;
			else ips[req.ip] = 1;
			if(ips[req.ip]>10) res.end("Try after 10 minutes");
			next();
		}
	}
}

/**
  * @param {express.Request} req
  * @param {express.Response} res
*/
exports.userMiddleware = function userMiddleware(req, res, next){
	if(req.user){
		next();
	}
	else {
		res.redirect("/auth/login");
	}
}

/**
  * @param {express.Request} req
  * @param {express.Response} res
*/
exports.notLoginMiddleware = function userMiddleware(req, res, next){
	if(req.user){
		res.redirect("/");
	}
	else {
		next();
	}
}