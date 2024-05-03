const express = require("express");
const session = require("express-session");
require("dotenv").config();
const path = require("path");
const logger = require('morgan')

const connectDb = require("./config/db");
const userRouter = require("./routes/userRoute");

const app = express();

connectDb();
app.use(
	session({
		secret: process.env.SESSION_SECRET,
		resave: false,
		saveUninitialized: true,
		cookie: { secure: false },
	})
);
app.use(logger("dev"));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use("/", userRouter);


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
	console.log(`Server startes on ${process.env.BASE_URL}:${PORT}`);
});
