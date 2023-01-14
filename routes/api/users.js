let router = require("express").Router();
let {schema,schemaPass} = require("../../schemas/user");
const validator = require("../../middlewares/validator");
const accountExistsUser = require("../../middlewares/accountExistsSignUp");

let {
  register,
  verificar,
  accesswToken,
  exit,
  access,
  one,
  update,
} = require("../../controllers/users");

router.post("/signup", validator(schema), accountExistsUser, register);
router.get("/verify/:code", verificar);

const schema2 = require("../../schemas/loginUser");
const accountExistsSignIn = require("../../middlewares/accountExistsSignIn");
const accountHasBeenVerified = require("../../middlewares/accountHasBeenVerified");
const passwordUpdateValidation = require("../../middlewares/passwordUpdateValidation");
const mustSignIn = require("../../middlewares/mustSignIn");
const passport = require("../../config/passport");

router.post(
  "/signin",
  validator(schema2),
  accountExistsSignIn,
  accountHasBeenVerified,
  access
);
router.post(
  "/token",
  passport.authenticate("jwt", { session: false }),
  mustSignIn,
  accesswToken
);
router.put("/sign-out", passport.authenticate("jwt", { session: false }), exit);

router.get("/me/:id",validator(schemaPass),passport.authenticate("jwt", { session: false }),one);
/* router.route("/me/:id").patch(update); */
router.patch("/me/:id",validator(schemaPass),passport.authenticate("jwt", { session: false }),passwordUpdateValidation,update);

module.exports = router;
