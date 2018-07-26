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
     User.findOne({ 'social.googleId': profile.id })
       .then(user => {
         if (user) {
           next(null, user);
         } else {
           // TODO: Add photo
           user = new User({
             name: profile.displayName,
             email: profile.emails[0].value,
             social: {
               googleId: profile.id
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

