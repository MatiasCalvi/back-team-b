let router = require("express").Router();
let validator=require("../../middlewares/validator")
let schema=require('../../schemas/newCity')
const passport = require('../../config/passport')

let { create, read, readOne, update , destroy } = require("../../controllers/cities");

router.route("/").post(passport.authenticate("jwt", { session: false }),validator(schema), create)

router.get("/", read);
router.get("/:id", readOne);
router.put("/:id", update);
router.delete("/:id",destroy)

module.exports = router;
 