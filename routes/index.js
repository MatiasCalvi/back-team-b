let router = require('express').Router()

let user =require('./users')

router.use('/users',user)

module.exports = router;
