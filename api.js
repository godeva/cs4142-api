const express = require('express')
var router = express.Router()

router.get('/', function(req, res) {
    res.send('API home, nothing here yet')
})

module.exports = router