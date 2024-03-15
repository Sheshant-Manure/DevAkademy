const express = require('express');
const router = express.Router();
const passport = require('passport');
require('dotenv').config();

const logOrigin = (req, res, next) => {
    console.log(req.headers);
    next();
}

// This route will open a GitHub consent form where user will enter credentials and allow  access to their data on Github
router.get('/github', logOrigin, passport.authenticate( 'github'));  

// If the user allows access to Github data, they are redirected to the following url along with query param
// that contains a code which can be authenticated to get user data.
router.get('/github/redirect', passport.authenticate('github'), logOrigin, (req, res) => {
    res.redirect(process.env.CLIENT_URL);
})

module.exports = router;