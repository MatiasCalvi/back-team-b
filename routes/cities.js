let router = require('express').Router()

let { create } = require('../controllers/cities')

router.post('/',create)

module.exports = router;
