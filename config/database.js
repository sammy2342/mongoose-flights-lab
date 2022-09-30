const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/flights')

const db = mongoose.connection

//This is so we can make sure it is connected
db.on('connected', function() {
    console.log(`Connected to mongoDB at ${db.host}:${db.port}`)
})