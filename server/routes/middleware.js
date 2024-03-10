const checkAuthentication = (req, res, next) => {
    if (req.isAuthenticated()) 
        next();
    else 
     return res.json({ message: 'User is  not authenticated, please sign in to continue!', status: false });
}

module.exports = checkAuthentication;