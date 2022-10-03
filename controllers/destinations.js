const Flight = require('../models/flight')

module.exports = { 
    create
}

function create(req, res) { 
    console.log(req.body, 'this is a console.log')
    Flight.findById(req.params.id, function(err, flight) { 
        flight.destinations.push(req.body)
        console.log(flight.destinations)
        flight.save( function(err) { 
            res.redirect(`/flights/${flight.id}`)
        })
    })
}

