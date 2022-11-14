let router  = require('express').Router();

let { create,read, } = require("../../controllers/hotels");

router.post("/", create);
router.get("/",read);








module.exports = router;