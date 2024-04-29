const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const passport = require('passport');
require('dotenv').config();

// Routes
const authRoutes = require('./routes/auth-routes');
const userDataRoutes = require('./routes/userdata-routes');
const newsletterRoutes = require('./routes/newsletter-routes.js');
const razorpayRoutes = require('./routes/razorpay-routes.js');
const { signOut } = require('./controllers/signout');

require('./config/passport-setup.js');
require('./config/database-connection.js');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({
  origin: `${process.env.CLIENT_URL}`,
  credentials: true,
}));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", process.env.CLIENT_URL);
  next();
});

// Configuring express-session before passport.initialize() as passport relies on it to work properly
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
}));

app.use(passport.initialize());

// To parse cookies  from the request header and store them in req.cookies
app.use(cookieParser());

app.use('/userdata', userDataRoutes);
app.use('/auth', authRoutes);
app.use('/newsletter', newsletterRoutes);
app.use('/razorpay', razorpayRoutes);
app.get('/signout', signOut);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});