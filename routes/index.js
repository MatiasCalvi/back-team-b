let router = require("express").Router();

let users = require("./api/users");
let cities = require("./api/cities");
let itineraries = require("./api/itineraries");
let reactions = require("./api/reactions")




let shows = require("./api/shows")
let hotels = require("./api/hotels")

let comments = require("./api/comments")

router.use("/api/auth", users);
router.use("/api/cities", cities);
router.use("/api/cities/:id", cities);
router.use("/api/itineraries", itineraries);
router.use("/api/itineraries/:id", itineraries);
router.use("/api/reactions", reactions)





router.use("/api/hotels", hotels)
router.use("/api/hotels/:id", hotels)
router.use("/api/shows", shows)
router.use("/api/shows/:id", shows)
router.use("/api/comments",comments)
router.use("/api/comments/:id",comments)
module.exports = router;
