let router = require("express").Router();
const validator= require('../../middlewares/validator')
const schema=require('../../schemas/itenerary')
const passport = require('../../config/passport')

let { create,update,destroy,read } = require("../../controllers/itineraries");

router.get("/", read);
router.post("/",validator(schema),create);
router.put('/:id', passport.authenticate("jwt", { session: false }), update);
router.delete('/:id', passport.authenticate("jwt", { session: false }), destroy);

module.exports = router;
