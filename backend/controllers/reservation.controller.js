const { Reservation } = require('../config/db.js');

const get = async function(_, res) {
    try {
        const reservations = await Reservation.findAll()
        console.log(reservations);
        res.status(200).json({ reservations })
    } catch(error) {
        res.json(error);
    }
};

const post = async function(req, res) {
       const reservation = req.body
    console.log(reservation)
       // Vérifier qu'il y a une réservation
       if (!reservation) {
        return res.status(400).json({ message: 'La réservation n\'existe pas'})
       }

       // Créer la réservation
       await Reservation.create(reservation);
    return res.status(200).json({reservation})
    }

const put = async function(req, res) {
        res.json({ message: 'Vous êtes sur la route PUT des reservations' });
}

const destroy = async function(req, res) {
        res.json({ message: 'Vous êtes sur la route DELETE des reservations' });
}

module.exports = { get, post, put, destroy };