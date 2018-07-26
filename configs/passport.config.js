const User = require('../model/user.model');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

module.exports.setup = (passport) => {
    passport.serializeUser((user, next) => {
        next(null, user._id);
    });

    passport.deserializeUser((id, next)=> {
        User.findById(id)
            .then(user => {
                next(null, user);
            })
            .catch(error => {
                next(error);
            })
    })

    passport.use('google-auth', new GoogleStrategy({
        clientID: process.env.GOOGLE_AUTH_CLIENT_ID || '',
        clientSecret: process.env.GOOGLE_AUTH_CLIENT_SECRET || '',
        callbackURL: process.env.GOOGLE_AUTH_CB || '/auth/google/cb',
    }, authenticateOAuthUser));

   function authenticateOAuthUser(accessToken, refreshToken, profile, next) {
     let socialId = `${profile.provider}Id`;
     User.findOne({ [`social.${socialId}`]: profile.id })
       .then(user => {
         if (user) {
           next(null, user);
         } else {
           user = new User({
             name: profile.displayName,
             email: profile.emails[0].value,
             password: Math.random().toString(36).substring(7),
             social:{
               [socialId]: profile.id
             }
           })
           return user.save()
             .then(user => {
               next(null, user);
             });
         }
       })
       .catch(error => next(error));
   }
}

