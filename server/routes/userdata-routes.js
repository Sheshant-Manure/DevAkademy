const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
require('dotenv').config();

const checkAuthentication = (req, res, next) => {
    const authToken = req.query.token;
    if (!authToken) {
        return res.status(401).json({ message: 'Unauthorized: Missing authToken' });
    }
    jwt.verify(authToken, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Unauthorized: Invalid authToken' });
        }
        req.user = decoded;
        next();
    });
}

router.get('/', checkAuthentication, (req, res) => {
    return res.json(req.user);
});

module.exports = router;