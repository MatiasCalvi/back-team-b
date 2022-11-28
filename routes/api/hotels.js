let router  = require('express').Router();
let validator=require("../../middlewares/validator")
let schema=require('../../schemas/newHotel')

let { create, read, update, destroy,  } = require("../../controllers/hotels");

router.route("/")     
.post(validator(schema),create)  

router.get("/",read);
router.patch("/:id", update)
router.delete("/:id",destroy)






module.exports = router;