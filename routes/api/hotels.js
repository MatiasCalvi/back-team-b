let router  = require('express').Router();
let validator=require("../../middlewares/validator")
let schema=require('../../schemas/newHotel')
const passport = require('../../config/passport')


let { create, read, update, destroy  } = require("../../controllers/hotels");

router.route("/")     
.post(validator(schema), passport.authenticate("jwt", { session: false }) ,create)  
router.get("/",read);
router.patch("/:id", update)
router.route("/:id")     
.delete(destroy)  





module.exports = router;
