const mongoose = require('mongoose')

const Schema = mongoose.Schema

const destinationSchema = new Schema({
    airport:{
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN']
    },
    arrival: Date
}, {
    timestamps: true
})

const flightSchema = new Schema({
    airline: {
        type: String, 
        enum: ['American', 'Southwest', 'United']
    }, 
    airport: {
        type: String, 
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'], 
        default: 'DEN'
    }, 
    flightNo: {
        type: Number,
        min: 10, 
        max: 9999
    },
    departs: {
        type: Date,
        // stackOVer flow 
        // this mean 365 days = 365*24*60*60000 = 365 * 24 hours * 60 minutes * 60 seconds * 1000 milliseconds
        default: function () {
            return new Date(new Date().setFullYear(new Date().getFullYear() + 1))
        }
    },
    destinations: [destinationSchema], 
}, {
    timestamps: true
})

module.exports = mongoose.model('Flight', flightSchema)