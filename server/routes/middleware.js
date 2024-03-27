require('dotenv').config();

const checkAuthentication = (req, res, next) => {
    if (req.isAuthenticated()) 
        next();
    else 
     return res.json({ message: 'User is  not authenticated, please sign in to continue!', status: false });
}

const validateJWT = (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized: Missing token' });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Unauthorized: Invalid token' });
    }
    req.user = decoded;
    next();
  });
}

module.exports = { checkAuthentication, validateJWT };