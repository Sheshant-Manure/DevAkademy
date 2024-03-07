module.exports.signOut = (req, res) => {
    
    req.logout((err) => {
        if (err) {
            return res.status(500).send('Error logging out'); // Or handle differently
        }
  
        res.redirect('http://localhost:3000/');
    });

}