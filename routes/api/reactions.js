let router = require("express").Router();
const validator= require('../../middlewares/validator')
const schema=require('../../schemas/reaction')
const passport = require('../../config/passport')
const Reaction = require('../../models/Reaction')
const activityUser = require('../../middlewares/activityUser');


let { create,update,read,destroy } = require("../../controllers/reactions");


router.post("/",validator(schema),create);
router.get("/",passport.authenticate("jwt", { session: false }),read)
router.put("/",passport.authenticate("jwt", { session: false }),update)
router.put('/:id',passport.authenticate("jwt", { session: false }), activityUser(Reaction), destroy)

module.exports = router;