let router  = require('express').Router();
let validator=require("../../middlewares/validator")
let schema=require('../../schemas/newHotel')
/* let schema2= require ('../../schemas/deleteHotel') */

let { create, read, update, destroy,  } = require("../../controllers/hotels");

router.route("/")     
.post(validator(schema),create)  

router.get("/",read);
router.patch("/:id", update)
router.route("/:id")     
.delete(destroy)  







module.exports = router;