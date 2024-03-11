const { Reservation } = require('../config/db.js');

const get = async function(req, res, next) {
    try {
        const reservations = await Reservation.findAll()
        console.log(reservations);
        res.status(200).json({ reservations })
    } catch(error) {
        res.json(error);
    }
};

module.exports = { get };