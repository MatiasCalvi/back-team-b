let router = require("express").Router();
const schema2 = require('../../schemas/loginUser')
const validator = require('../../middlewares/validator')
const accountExistsSignUp = require('../../middlewares/accountExistsSignUp')
const accountExistsSignIn = require('../../middlewares/accountExistsSignIn')
const accountHasBeenVerified = require('../../middlewares/accountHasBeenVerified')
const mustSignIn = require('../../middlewares/mustSignIn')
const { registrar,ingresar,verificar, ingresarConToken, salir } = require('../../controllers/users')
const passport = require('../../config/passport')




router.post('/signup',accountExistsSignUp,registrar)



router.get('/verify/:code',verificar)
router.post('/signin' , validator(schema2),accountExistsSignIn,accountHasBeenVerified,ingresar)
router.post('/token', passport.authenticate('jwt', {session: false}), mustSignIn, ingresarConToken)
router.put('/signout', passport.authenticate('jwt', {session: false}), salir)

module.exports = router;
