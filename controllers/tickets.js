const Ticket = require('../models/ticket')
const Flight = require('../models/flight')

module.exports = { 
    new: newTicket, 
    create,
}

function newTicket(req, res) { 
    Ticket.find({}, function(err, ticket) {
        res.render('tickets/new', { 
            ticket: ticket
        })
    })
}

function create(req, res) { 
    console.log(req.body)
    Ticket.create(req.body, function(err, tickets) {
        res.redirect('/tickets/new')
    })
}