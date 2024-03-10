module.exports.signOut = (req, res) => {
require('dotenv').config()

    req.logout((err) => {
        if (err) {
            return res.status(500).send('Error logging out'); // Or handle differently
        }
        res.redirect(process.env.CLIENT_URL);
    });

}