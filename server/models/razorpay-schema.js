const mongoose = require('mongoose');

const razorpaySchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'user' },
    customer: { type: Object, required: true },
});

const RazorpayModel = mongoose.model('Razorpay',  razorpaySchema);
module.exports = RazorpayModel;