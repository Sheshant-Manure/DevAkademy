const express = require('express');
const session = require('express-session')

// Routes
const authRoutes = require('./routes/auth-routes');
const userDataRoutes = require('./routes/userdata-routes');
const newsletterRoutes = require('./routes/newsletter-routes.js');

const passport = require('passport');
const cors = require('cors');
require('./config/database-connection.js')
require('dotenv').config();

const app = express();
app.use(cors({
  origin: 'http://localhost:3000', // Your client's origin
  credentials: true, // Allow credentials (cookies)
}));

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: true,
  saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

app.use('/userdata', userDataRoutes);
app.use('/auth', authRoutes);
app.use('/newsletter', newsletterRoutes);
app.get('/logout', (req, res) => {
  req.logout((err) => {
      if (err) {
          // Handle any potential errors during logout
          console.error(err);
          return res.status(500).send('Error logging out'); // Or handle differently
      }

      res.redirect('http://localhost:3000/');
  });
});


const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});