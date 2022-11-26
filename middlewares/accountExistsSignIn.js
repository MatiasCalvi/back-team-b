const User = require("../models/User");
const { invalidCredentialsResponse } = require("../config/responses");

async function accountExistsSignIn(req, res, next) {
  const user = await User.findOne({ email: req.body.email });
  if (user) {
    req.user = {
      name: user.name,
      id: user._id,
      email: user.email,
      password: user.password,
      verified: user.verified,
      role: user.role
    };
    return next();
  }
  return invalidCredentialsResponse(req, res);
}

module.exports = accountExistsSignIn;
