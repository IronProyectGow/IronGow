const passport = require('passport');

module.exports.createWithIDPCallback = (req, res, next) => {
    passport.authenticate('google-auth', (error, user, firstLogin) => {
    if (error) {
      next(error);
    } else {
      req.login(user, (error) => {
        if (error) {
          next(error)
        } else {
          if(firstLogin && firstLogin === true){
            res.redirect('/?rt')
          } else {
            res.redirect('/users') //esto hay que corregirlo
          }
        }
      });
    }
  })(req, res, next);
}

module.exports.delete = (req, res, next) => {
  req.logout();
  res.redirect('/');
}


