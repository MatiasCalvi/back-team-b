/* const Users = require("../models/User"); */
const { verifyResponse } = require("../config/responses")

async function accountHasBeenVerified(req, res, next) {
/*     const user = await Users.findOne({verified: req.body.verified}) */
    if (req.user.verified) {
        return next()
    }
    return verifyResponse(req,res)
}

module.exports = accountHasBeenVerified