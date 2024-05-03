const isLoggedIn = (req, res, next) => {
    console.log("-----------------------");
    console.log(req.isAuthenticated());
    console.log("-----------------------");
	req.email ? next() : res.sendStatus(401);
};


module.exports = isLoggedIn