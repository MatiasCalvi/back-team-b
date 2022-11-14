let router = require("express").Router();

let { readOne } = require("../../controllers/itineraries");

router.get("/", readOne);

module.exports = router;
