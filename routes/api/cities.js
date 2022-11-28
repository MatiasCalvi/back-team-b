let router = require("express").Router();
let validator=require("../../middlewares/validator")
let schema=require('../../schemas/newCity')

let { create, read, readOne, update , destroy } = require("../../controllers/cities");
router.route("/")     
.post(validator(schema),create)

router.get("/", read);
router.get("/:id", readOne);
router.put("/:id", update);
router.delete("/:id",destroy)

module.exports = router;
