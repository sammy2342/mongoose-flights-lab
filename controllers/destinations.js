const Flight = require('../models/flight')

module.exports = { 
    create
}

function create(req, res) { 
    // console.log(req.body, 'this is a console.log')
    Flight.findById(req.params.id, function(err, flight) { 
        // console.log(flight.destinations, 'adslfmalsdfmlksadfmmasd;flmk')
        flight.destinations.push(req.body)
        flight.destinations.sort( (a, b) => b.arrival - a.arrival)
        flight.save( function(err) { 
            res.redirect(`/flights/${flight.id}`)
        })
    })
}

