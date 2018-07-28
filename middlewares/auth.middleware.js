const createError = require('http-errors');


module.exports.checkRole = (role) => {
  return (req, res, next) => {
    if (req.isAuthenticated() && req.user.role === role) {
      next();
    } if(req.isAuthenticated() && req.user.role === '') {
        res.redirect('/role_selection')
    } else {
      next(createError(403, 'Insufficient privileges'))
    }
  }
}