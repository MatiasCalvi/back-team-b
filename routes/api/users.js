let router = require("express").Router();
let schema= require('../../schemas/user')
const validator= require('../../middlewares/validator')
const accountExistsUser=require('../../middlewares/accountExistsSignUp')

let { register,verificar,ingresarConToken, salir,ingresar } = require("../../controllers/users");

router.post("/signup",validator(schema),accountExistsUser,register);
router.get('/verify/:code',verificar)



const schema2 = require('../../schemas/loginUser')
const accountExistsSignIn = require('../../middlewares/accountExistsSignIn')
const accountHasBeenVerified = require('../../middlewares/accountHasBeenVerified')
const mustSignIn = require('../../middlewares/mustSignIn')
const passport = require('../../config/passport')
/* const { registrar,ingresar,verificar, ingresarConToken, salir } = require('../../controllers/users') */



router.post('/signin' , validator(schema2),accountExistsSignIn,accountHasBeenVerified,ingresar)
router.post('/token', passport.authenticate('jwt', {session: false}), mustSignIn, ingresarConToken)
router.put('/signout', passport.authenticate('jwt', {session: false}), salir)






module.exports = router;
