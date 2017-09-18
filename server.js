const express = require('express')
const app = express()

var api = require('./api')

app.use(express.static('public'))

app.use('/api', api)

app.listen(3000, function() {
    console.log('Listening on localhost:3000')
})
