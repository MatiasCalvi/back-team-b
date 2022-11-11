let router = require("express").Router();

let { create } = require("../../controllers/users");

router.post("/", create);

module.exports = router;
