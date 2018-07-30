const passport = require('passport');

module.exports.createWithIDPCallback = (req, res, next) => {
    passport.authenticate('google-auth', (error, user) => {
    if (error) {
      next(error);
    } else {
      req.login(user, (error) => {
        if (error) {
          next(error)
        } else {
            res.redirect('/') //esto hay que corregirlo
        }
      });
    }
  })(req, res, next);
}

module.exports.delete = (req, res, next) => {
  req.logout();
  res.redirect('/');
}


