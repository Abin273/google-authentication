const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth2").Strategy;

// Configure Google OAuth2 Strategy
passport.use(
	new GoogleStrategy(
		{
			clientID: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
			callbackURL: `${process.env.BASE_URL}:${process.env.PORT}/auth/google/callback`,
			passReqToCallback: true,
		},
		function (request, accessToken, refreshToken, profile, done) {
			return done(null, profile);
		}
	)
);

// Serialize user into session
passport.serializeUser(function (user, done) {
	done(null, user);
});

// Deserialize user from session
passport.deserializeUser(function (obj, done) {
	done(null, obj);
});

module.exports = passport;
