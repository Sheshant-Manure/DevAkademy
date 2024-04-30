const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
require('dotenv').config();

// This route will open a GitHub consent form where the user will enter credentials and allow access to their data on GitHub
router.get('/github', passport.authenticate('github'));  

// If the user allows access to GitHub data, they are redirected to the following URL along with a query param
// that contains a code which can be authenticated to get user data.
router.get('/github/redirect', passport.authenticate('github'), (req, res) => {
    
    const user = {
        id: req.user._id.toHexString(),
        name: req.user.name,
        email: req.user.email,
        imageURL: req.user.imageURL,
        newsletterSubscription: req.user.newsletterSubscription
    }
    
    const token = jwt.sign(user, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.redirect(`${process.env.CLIENT_URL}?token=${token}`);
});

module.exports = router;