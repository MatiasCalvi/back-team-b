let router = require("express").Router();

let users = require("./api/users");
let cities = require("./api/cities");
let itineraries = require("./api/itineraries");

router.use("/api/users", users);
router.use("/api/cities", cities);
router.use("/api/cities/:id", cities);
router.use("/api/itineraries", itineraries);
router.use("/api/itineraries/:id", itineraries);

module.exports = router;
