const express = require("express");
const isLoggedIn = require("../middlewares/autherization");

const router = express.Router();

router.get("/", (req, res) => {
	res.render("index");
});

router.get("/home", isLoggedIn, (req, res) => {
	res.render("home", { user: req.user });
});

module.exports = router;
