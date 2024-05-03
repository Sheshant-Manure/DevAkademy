const express = require('express');
const router = express.Router();
const newsletterController = require('../controllers/newsletter-subscription');
const { validateJWT } = require('./middleware');

router.get('/subscribe', validateJWT, newsletterController.subscribe);
router.get('/unsubscribe', validateJWT, newsletterController.unsubscribe);

module.exports = router;