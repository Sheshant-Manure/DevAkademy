const passport = require('passport');
const GitHubStrategy = require('passport-github2').Strategy;
const User = require('../models/user-schema.js');
require('dotenv').config();

passport.use(
    new GitHubStrategy({
        clientID: process.env.GITHUB_CLIENT_ID,
        clientSecret: process.env.GITHUB_CLIENT_SECRET,
        callbackURL: process.env.CALLBACK_URL,
        scope: ['user:email', 'read:user']
    }, async (accessToken, refreshToken, profile, done) => {
        try {
            const currentUser = await User.findOne({ 'githubId': profile.id });

            if (currentUser) {
                // User already exists, log them in 
                return done(null, currentUser);
            } else {
                // User doesn't exist, create a new user
                const newUser = new User({
                    name: profile.username,
                    email: profile.emails[0].value,
                    githubId: profile.id,
                    imageURL: profile._json.avatar_url,
                });
                // Save the new user to the database
                await newUser.save();
                return done(null, newUser);
            }
        } catch (error) {
            return done(error, null);
        }
    })
);

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done)=>{
    User.findById(id)
        .then(user => done(null, user))
        .catch(err => done(err));
});