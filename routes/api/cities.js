let router = require("express").Router();

let { create, read, readOne, update } = require("../../controllers/cities");

router.post("/", create);
router.get("/", read);
router.get("/:id", readOne);
router.put("/:id", update);

module.exports = router;
