const express = require('express');
const router = express.Router();
const razorpayController = require('../controllers/razorpay-controller');

router.post('/customer/create-customer', razorpayController.createCustomer);
router.get('/customer/fetch-all-customers', razorpayController.fetchALlCustomers);
router.post('/order/create-order', razorpayController.createOrder);
router.post('/qrcode/create', razorpayController.createQRCode);

module.exports = router;