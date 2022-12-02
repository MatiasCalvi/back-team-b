let router  = require('express').Router();
const validator= require('../../middlewares/validator')
const passport = require('../../config/passport')
const schema=require('../../schemas/newShow')

let { create , update, destroy, read  } = require("../../controllers/shows");


router.post("/",validator(schema),create);
router.get("/", read);

router.patch("/:id", passport.authenticate("jwt", { session: false }), update)
router.delete("/:id" , passport.authenticate("jwt", { session: false }),destroy)


module.exports = router;
