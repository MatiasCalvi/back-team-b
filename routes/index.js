let router = require("express").Router();

let users = require("./api/users");
let cities = require("./api/cities");
let itineraries = require("./api/itineraries");




let shows = require("./api/shows")
let hotels = require("./api/hotels")

router.use("/api/users", users);
router.use("/api/cities", cities);
router.use("/api/cities/:id", cities);
router.use("/api/itineraries", itineraries);
router.use("/api/itineraries/:id", itineraries);





router.use('/api/auth',users)




router.use("/api/hotels", hotels)
router.use("/api/hotels/:id", hotels)
router.use("/api/shows", shows)
router.use("/api/shows/:id", shows)
module.exports = router;
