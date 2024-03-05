const Razorpay = require('razorpay');

const razorpay = new  Razorpay({
    key_id: process.env.RAZORPAY_KEY,
    secret: process.env.RAZORPAY_SECRET
});

module.exports = razorpay;