let router = require('express').Router()

let hotel =require('./hotel')

router.use('/hotel',hotel)

module.exports = router;
