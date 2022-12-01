let router = require("express").Router();
const validator= require('../../middlewares/validator')
const schema=require('../../schemas/reaction')
const passport = require('../../config/passport')

let { create,update,read } = require("../../controllers/reactions");


router.post("/",validator(schema),create);
router.get("/",read);
router.put("/",passport.authenticate("jwt", { session: false }),update)

module.exports = router;