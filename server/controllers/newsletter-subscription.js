const User = require('../models/user-schema');

module.exports.subscribe = async (req, res) => {
    try {
        const id = req.user._id;
        await User.findByIdAndUpdate(id, { newsletterSubscription: true });
        res.status(200).json({ message: 'Successfully subscribed to the newsletter.' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports.unsubscribe = async (req, res) => {
    try {
        const id = req.user._id;
        await User.findByIdAndUpdate(id, { newsletterSubscription: false });
        res.status(200).json({ message: 'Successfully unsubscribed from the newsletter.' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
