const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
require('dotenv').config();

const checkAuthentication = (req, res, next) => {
    const authToken = req.cookies.authToken;
    if (!authToken) {
        return res.status(401).json({ message: 'Unauthorized: Missing authToken cookie' });
    }
    jwt.verify(authToken, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Unauthorized: Invalid authToken cookie' });
        }
        req.user = decoded;
        next();
    });
}

router.get('/', checkAuthentication, (req, res) => {
    return res.send(req.user);
});

module.exports = router;