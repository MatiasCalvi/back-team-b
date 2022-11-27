let router = require("express").Router();
const validator= require('../../middlewares/validator')
const passport = require('../../config/passport')
const schema=require('../../schemas/loginUser')

let { create,update,destroy,read } = require("../../controllers/itineraries");

router.get("/", read);
router.post("/",passport.authenticate('jwt',{session:false}),validator(schema),create);
router.put("/:id", update);
router.delete("/:id",destroy)

module.exports = router;
