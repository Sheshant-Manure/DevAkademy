const express = require('express');
const router = express.Router();
const razorpayController = require('../controllers/razorpay-controller');
const { checkAuthentication } = require('./middleware');

router.get('/customer/check-customer', checkAuthentication, razorpayController.checkCustomer);
router.post('/customer/create-customer', checkAuthentication, razorpayController.createCustomer);
router.get('/customer/fetch-all-customers', checkAuthentication, razorpayController.fetchALlCustomers);
router.get('/customer/fetch-customer/:id', checkAuthentication, razorpayController.fetchCustomerById);
router.post('/order/create-order', checkAuthentication, razorpayController.createOrder);
router.post('/qrcode/create-qrcode', checkAuthentication, razorpayController.createQRCode);

module.exports = router;