const express = require('express');
const router = express.Router();
const passport = require('passport');
require('../config/passport-setup.js');

// This route will open a GitHub consent form where user will enter credentials and allow  access to their data on Github
router.get('/github', passport.authenticate( 'github', { scope: ['profile'] }));  

// If the user allows access to Github data, they are redirected to the following url along with query param
// that contains a code which can be authenticated to get user data.
router.get('/github/redirect', passport.authenticate('github'), (req, res) => {
    res.redirect('http://localhost:3000/')
})

module.exports = router;