require('dotenv').config();
const jwt = require('jsonwebtoken');

const validateJWT = (req, res, next) => {
    const token = req.query.token;
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized: Missing token' });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Unauthorized: Invalid token' });
    } else {
      req.user = decoded;
      next();
    }
  });
}

module.exports = { validateJWT };