const createError = require('http-errors');
​
​
module.exports.isAuthenticated = (req, res, next) => {
 if (req.isAuthenticated()) {
  next()
 } else {
  res.status(401)
   .redirect('/sessions/create');
 }
}

module.exports.checkRole = (role) => {
    return (req, res, next) => {
        if (req.isAuthenticated() && req.user.role === role){
            next();
        } else if (req.isAuthenticated() && req.user.role === ''){
            res.redirect('/role-selection')
        } else {
            next(createError(403, 'Insufficient Privileges'));
        }
    }
}