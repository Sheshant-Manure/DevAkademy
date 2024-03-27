const express = require('express');
const session = require('express-session')

// Routes
const authRoutes = require('./routes/auth-routes');
const userDataRoutes = require('./routes/userdata-routes');
const newsletterRoutes = require('./routes/newsletter-routes.js');
const razorpayRoutes = require('./routes/razorpay-routes.js');
const { signOut } = require('./controllers/signout');

const passport = require('passport');
require('./config/passport-setup.js');
const cors = require('cors');
require('./config/database-connection.js')
require('dotenv').config();

const app = express();

app.use(express.json());

app.use(cors({
  origin: `${ process.env.CLIENT_URL }`, 
  credentials: true,
}));

app.use((req, res, next) => {
  if (req.csrfToken) {
      res.cookie(
          "XSRF-TOKEN", 
          req.csrfToken(),
          {
              secure: true, 
              httpOnly: true, 
              sameSite: 'none',
              domain: process.env.COOKIE_DOMAIN
          }
      );
  }
  next();
});

app.use(session({
  name: 'GitHubConnect.sid',
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false
  // cookie: {
  //   domain: process.env.COOKIE_DOMAIN,
  //   maxAge: 1000 * 60 * 60 * 24,
  //   sameSite: 'none',
  //   secure: true,
  //   httpOnly: true,
  // }
}));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", process.env.CLIENT_URL);
  next();
})

app.use(passport.initialize());
app.use(passport.session());

app.use('/userdata', userDataRoutes);
app.use('/auth', authRoutes);
app.use('/newsletter', newsletterRoutes);
app.use('/razorpay', razorpayRoutes);
app.get('/signout', signOut);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});