let router = require("express").Router();

let users = require("./api/users");
let cities = require("./api/cities");
let itineraries = require("./api/itineraries");
let hotels = require("./api/hotels")

router.use("/api/users", users);
router.use("/api/cities", cities);
router.use("/api/cities/:id", cities);
router.use("/api/itineraries", itineraries);
router.use("/api/hotels", hotels)

module.exports = router;
