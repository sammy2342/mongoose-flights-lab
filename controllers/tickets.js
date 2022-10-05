const Ticket = require('../models/ticket')
const Flight = require('../models/flight')

module.exports = { 
    new: newTicket, 
    create,
    addTicket,
}

function newTicket(req, res) { 
    Ticket.find({}, function(err, ticket) {
        res.render('tickets/new', { 
            ticket: ticket
        })
    })
}

function create(req, res) { 
    const t = req.body.seat
    Ticket.create(req.body, function(err, tickets) {
        res.redirect('/tickets/new')
    })
}

function addTicket(req, res) { 
    // console.log(req.params.id)
    // console.log(req.body, 'THis is a console.log')
    Flight.findById(req.params.id, function(err, flight) { 
        // console.log(flight)
        flight.flight.push(req.body.ticketId)
        flight.save( function(err) {
            res.redirect(`/flights/${flight._id}`)
        })
    })
}