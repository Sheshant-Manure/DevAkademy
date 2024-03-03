const express = require('express');
const router = express.Router();

const checkAuthentication = (req, res, next) => {
    if (req.isAuthenticated()) 
        next();
    else 
     return res.json({ message: 'User is  not authenticated, please sign in to continue!' });
}

router.get('/', checkAuthentication, (req, res) => {
    console.log(req)
    return res.send(req.user);
});

module.exports = router;