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
    
    const seat = req.body.seat;
    const price = req.body.price;
    const flight = req.params.id;
    const ticket = new Ticket({seat, price, flight});
    ticket.save((err) => {
        if (err) return res.render('flights/new');
        res.redirect(`/flights/${req.params.id}`);
    });
  };