const express=require('express');
const passport = require('../util/passport');
const isLoggedIn = require('../middlewares/autherization')
const router=express.Router()

router.get('/',(req,res)=>{
    res.render('index')
})

router.get('/auth/google',
  passport.authenticate('google', { scope:
      [ 'email', 'profile' ] }
));

router.get( '/auth/google/callback',
    passport.authenticate( 'google', {
        successRedirect: '/home',
        failureRedirect: '/'
}));

router.get('/home',isLoggedIn, (req,res)=>{
    console.log("===============");
    console.log(req);
    console.log("===============");
    res.render("home",{req})
})

module.exports = router