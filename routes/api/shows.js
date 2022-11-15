let router  = require('express').Router();

let { create } = require("../../controllers/shows");


router.post("/", create);

module.exports = router;
