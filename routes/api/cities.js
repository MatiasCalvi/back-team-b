let router = require("express").Router();

let { create,read } = require("../../controllers/cities");

router.post("/", create);
router.get("/", read);

module.exports = router;
