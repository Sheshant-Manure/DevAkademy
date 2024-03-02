const express = require('express');
const session = require('express-session')
const authRoutes = require('./routes/auth-routes');
const passport = require('passport');
require('./config/database-connection.js')
require('dotenv').config();

const app = express();
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: true,
  saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

app.get('/', (req, res)=>res.send( 'Hello World!'));
app.use('/auth', authRoutes);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
