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
    // console.log(req.body)
    Ticket.create(req.body, function(err, tickets) {
        // console.log(err)
        res.redirect('/tickets/new')
    })
}

function addTicket(req, res) { 
    console.log(req.params.id, 'rhlksmbhlkmsdlkm')
    // console.log(req.body.seat, 'THis is a console.log')
    Ticket.find({'flight.$id':  req.params.id},function(err, flight) { 
        console.log(flight, 'THis a console.og for the ticket')
        
        
        // console.log(flight)
        // console.log(req.body.ticketId)
        // flight.save( function(err) {
        //     res.redirect(`/flights/${flight._id}`, {id: req.body.seat})
        // })
        res.redirect(`/flights/${req.params.id}`)
    })
}