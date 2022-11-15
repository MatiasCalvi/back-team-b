let router  = require('express').Router();

let { create , update  } = require("../../controllers/shows");


router.post("/", create);
router.patch("/:id", update)

module.exports = router;
