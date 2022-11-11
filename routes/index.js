let router = require("express").Router();

let users = require("./api/users");
let cities = require("./api/cities");

router.use("/api/users", users);
router.use("/api/cities", cities);

module.exports = router;
