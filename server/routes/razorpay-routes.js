const express = require('express');
const router = express.Router();
const razorpayController = require('../controllers/razorpay-controller');
const { validateJWT } = require('./middleware');

router.get('/customer/check-customer', validateJWT, razorpayController.checkCustomer);
router.post('/customer/create-customer', validateJWT, razorpayController.createCustomer);
router.get('/customer/fetch-all-customers', validateJWT, razorpayController.fetchALlCustomers);
router.get('/customer/fetch-customer/:id', validateJWT, razorpayController.fetchCustomerById);
router.post('/order/create-order', validateJWT, razorpayController.createOrder);
router.post('/qrcode/create-qrcode', validateJWT, razorpayController.createQRCode);

module.exports = router;