const express = require("express");
const passport = require("passport");
const { pullSourceCode, restartServer, buildServer, buildClient } = require("./api");
const { notLoginMiddleware, userMiddleware}  = require("./middleware");
const settings = require("./settings");


const router = express.Router();

router.get('/', userMiddleware, (req,res)=>{
	const context = {
		settings: settings
	}

	res.render("index.njk", context);
})

router.get('/404', (req,res)=>{
	res.render("404.njk");
})

router.get('/500', (req,res)=>{
	res.render("500.njk");
})

router.get('/auth/login', (req,res)=>{
	res.render("login.njk");
})

router.post('/auth/login', notLoginMiddleware, express.urlencoded(), 
	passport.authenticate('local', { failureRedirect:"/auth/login"}),
	(req,res)=>res.redirect("/")
);

router.post('/api/pull-source-code', userMiddleware, (req, res)=>{
	pullSourceCode();
	res.json({});
})

router.post('/api/restart-server', userMiddleware, (req, res)=>{
	restartServer();
	res.json({});
})

router.post('/api/build-server', userMiddleware, (req, res)=>{
	buildServer();
	res.json({});
})

router.post('/api/build-client', userMiddleware, (req, res)=>{
	buildClient();
	res.json({});
})

module.exports = router;
