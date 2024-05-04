const express = require("express");
const passport = require("../util/passport");
const isLoggedIn = require("../middlewares/autherization");

const router = express.Router();

router.get("/", (req, res) => {
	res.render("index");
});

// Passport.js redirects user to Google's authentication endpoint where user
//  can log in with their Google credentials.
router.get(
	"/google",
	passport.authenticate("google", { scope: ["email", "profile"] })
);

// After the user successfully logs in with Google, Google will redirect back to this URL
//  along with an authentication code
router.get(
	"/google/callback",
	passport.authenticate("google", {
		successRedirect: "/home",
		failureRedirect: "/",
	})
);

router.get("/home", isLoggedIn, (req, res) => {
	res.render("home", { user: req.user });
});

module.exports = router;
