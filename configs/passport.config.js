const User = require('../model/user.model');
const Artist = require('../model/artist.model');
const Bar = require('../model/bar.model');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const constants = require('../constants');

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
        passReqToCallback: true
    }, authenticateOAuthUser));

   function authenticateOAuthUser(req, accessToken, refreshToken, profile, next) {
     User.findOne({ 'social.googleId': profile.id })
       .then(user => {
         if (user) {  
           next(null, user, true);
         } else {
             console.log(profile);
             
           const userData = {
             name: profile.displayName,
             email: profile.emails[0].value,
             role: req.session.role,
             photo: profile.photos[0].value,
             social: {
               googleId: profile.id
             }
           }
           switch (req.session.role) {
            case constants.ROLE_USER:
                user = new User(userData);
                break;
            case constants.ROLE_ARTIST:
                user = new Artist(userData);
                break;
            case constants.ROLE_BAR:
                user = new Bar(userData);
                break;
            default:
                next(createError(404));
                return;
           }

           return user.save()
             .then(user => {
               next(null, user, false);
             });
         }
       })
       .catch(error => next(error));
   }
}

