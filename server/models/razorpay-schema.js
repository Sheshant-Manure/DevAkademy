const mongoose = require('mongoose');

const razorpaySchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
    customer_id: {type: String, required: true },
    order_id: { type: String, required: true },
    qrcode_id: { type: String, required: true },
    payment_id: { type: String, required: true }
});

const Razorpay = mongoose.model('Razorpay',  razorpaySchema);