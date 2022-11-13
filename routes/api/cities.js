let router = require("express").Router();

let { create,read,readOne } = require("../../controllers/cities");

router.post("/", create);
router.get("/", read);
router.get("/:id", readOne);

module.exports = router;
