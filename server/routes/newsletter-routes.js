const express = require('express');
const router = express.Router();
const newsletterController = require('../controllers/newsletter-subscription');
const { checkAuthentication } = require('./middleware');

router.get('/subscribe', checkAuthentication, newsletterController.subscribe);
router.get('/unsubscribe', checkAuthentication, newsletterController.unsubscribe);

module.exports = router;