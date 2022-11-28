let router = require("express").Router();
let schema= require('../../schemas/user')
const validator= require('../../middlewares/validator')
const accountExistsUser=require('../../middlewares/accountExistsSignUp')

let { register,verificar } = require("../../controllers/users");

router.post("/signup",validator(schema),accountExistsUser,register);
router.get('/verify/:code',verificar)


module.exports = router;
