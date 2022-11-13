let router = require("express").Router();

let { readOne,create,update } = require("../../controllers/itineraries");

router.get("/", readOne);
router.post("/", create);
router.put("/:id", update);

module.exports = router;
