const Flight = require('../models/flight')
const Ticket = require('../models/ticket')

module.exports = { 
    new: newFlight, 
    create, 
    index, 
    show
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
        // console.log(flight)
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

// async function list(req, res) { 
//     const flights = await Flight.find({})
//     res.render('flights/index', {
//         flights,
//     })
// }

function show(req, res) { 
    Flight.findById(req.params.id, function(err, flights) { 
        Ticket.find({flights: flights._id}, function(err, ticket) {
            // console.log(ticket, 'THID IS THE TICKET')
            console.log(req.params.id, 'this is a single flight id')
            console.log(ticket)
            res.render('flights/show', {
                flights: flights, 
                ticket: ticket,
                id: null
            })
        })
    })
}

// async function show1(req, res) {
//     const flight = await Flight.findById(req.params.id)
//     const tickets = await Ticket.find({flight: flight._id})
//     res.render('flights/show', { 
//         flight,
//         tickets,
//     })
// }