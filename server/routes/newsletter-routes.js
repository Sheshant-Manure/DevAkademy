const express = require('express');
const router = express.Router();
const newsletterController = require('../controllers/newsletter-subscription');

const checkAuthentication = (req, res, next) => {
    if (req.isAuthenticated()) 
        next();
    else 
     return res.json({ message: 'User is  not authenticated, please sign in to continue!', status: false });
}

router.get('/subscribe', checkAuthentication, newsletterController.subscribe);
router.get('/unsubscribe', checkAuthentication, newsletterController.unsubscribe);

module.exports = router;