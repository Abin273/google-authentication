const express = require("express");
const session = require("express-session");
const passport = require('passport')
require("dotenv").config();
const path = require("path");
const logger = require('morgan')

const userRouter = require("./routes/userRoute");

const app = express();

// Configure session middleware
app.use(
	session({
		secret: process.env.SESSION_SECRET,
		resave: false,
		saveUninitialized: true,
		cookie: { secure: false },
	})
);

// Initialize Passport.js middleware
app.use( passport.initialize());
app.use( passport.session());

app.use(logger("dev"));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use("/", userRouter);


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
	console.log(`Server startes on ${process.env.BASE_URL}:${PORT}`);
});
