let router = require("express").Router();

let { readOne,create } = require("../../controllers/itineraries");

router.get("/", readOne);
router.post("/", create);

module.exports = router;
