const path = require("path");

const express = require("express");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const nunjucks = require("nunjucks");
const passport = require("passport");
const passportLocalStrategy = require("passport-local");

const morgan = require("morgan");

const settings = require("./settings");
const router = require("./router");

const app = express();
app.set('trust proxy', 1);

if(process.env.NODE_ENV == "production") {
	app.use(session({
		secret: settings.security.sessionKey,
		resave: false,
		saveUninitialized: true,
		cookie: { secure: true}
	}));
}
else {
	app.use(session({
		secret: settings.security.sessionKey
	}));
	app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));
}
app.use(cookieParser());

app.use(passport.initialize());
app.use(passport.session());
const passport_option = {
	usernameField: "userId",
	passwordField: "userPw",
	session: true
}
const passport_strategy = new passportLocalStrategy(passport_option,
	(userId, userPw, done)=>{
		console.log("TRY LOGIN!", userId, userPw);
		if(userId == settings.security.userId && userPw == settings.security.userPw) {
			console.log("로그인 성공, 다음은?");
			return done(null, {userId: userId, userPw: userPw});
		}

		return done(null, false);
	}
)
passport.use(passport_strategy);
passport.serializeUser((user, done)=>{console.log(user);done(null, user)});
passport.deserializeUser((user, done)=>done(null, user));

nunjucks.configure(path.join(settings.serverRoot, "static", "templates"), {
		"autoescape": true, "watch": true, "express": app
	}
);

app.use(router);
app.use('/static/js', express.static(path.join(settings.serverRoot, 'static', 'js'), {fallthrough: false}));
app.use('/static/css', express.static(path.join(settings.serverRoot, 'static', 'css'), {fallthrough: false}));

app.listen(settings.port, '0.0.0.0', ()=>{
	console.log(`Server is running on ${settings.port} port`);
});
