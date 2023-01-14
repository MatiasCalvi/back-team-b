const bcryptjs = require("bcryptjs");
const { passwordNotMatch } = require("../config/responses");

function passwordUpdateValidation(req, res, next) {
        console.log(req.body);
        console.log(req.user) 
  if (req.body.password) {
    if (bcryptjs.compareSync(req.body.passwordCurrent, req.user.password)) {
      delete req.body.passwordCurrent;
      return next();
    } else {
      return passwordNotMatch(req, res);
    }
  } else {
    next();
  }
}

module.exports = passwordUpdateValidation;