const Flight = require('../models/flight')

module.exports = { 
    new: newFlight, 
    create, 
    index
}

function newFlight(req, res) {
    res.render('flights/new')
}

function create(req, res) {

    for(let key in req.body) {
        if(req.body[key] === '') delete req.body[key]
    }

    if(req.body.flightNo < 10 && req.body.flightNo > 1000) {
    
    }
    
    const flight = new Flight(req.body)
    flight.save( function(err) {
        if(err) return res.redirect('/flights/new')
        console.log(flight)
        // red direct down acts like a refersh page I think 
        res.redirect('/flights/new')
    })
    
}

function index(req, res) { 
    Flight.find({}, function(err, flights) { 
        res.render('flights/index', {
            flights: flights
        })
    })
}
