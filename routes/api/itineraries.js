let router = require("express").Router();

let { readOne,create,update,destroy,read } = require("../../controllers/itineraries");

router.get("/", read);
router.get("/", readOne);
router.post("/", create);
router.put("/:id", update);
router.delete("/:id",destroy)

module.exports = router;
