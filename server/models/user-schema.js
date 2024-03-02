const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: {  type: String,  unique: true },
    githubId: { type: String, required: true },
    imageURL: { type: String, required: true },
    newsletterSubscription: { type: Boolean, default: false }
})

const  User = mongoose.model('user', UserSchema);
module.exports = User;