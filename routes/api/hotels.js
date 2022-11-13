let router  = require('express').Router();

let { create } = require("../../controllers/hotels");

router.post("/", create);

module.exports = router;