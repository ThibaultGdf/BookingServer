const { Spot } = require('../config/db.js');

const get = async function(req, res, next) {
    try {
        const spots = await Spot.findAll()
        console.log(spots);
        res.status(200).json({ spots })
    } catch(error) {
        res.json(error);
    }
};

module.exports = { get };