const { Spot } = require('../config/db.js');

const get = async function(req, res) {
    try {
        const spots = await Spot.findAll()
        console.log(spots);
        res.status(200).json({ spots })
    } catch(error) {
        res.json(error);
    }
};

const post = async function(req, res) {
    res.json({ message: 'Vous êtes sur la route POST des spot' });
}

const put = async function(req, res) {
    res.json({ message: 'Vous êtes sur la route PUT des spot' });
}

const destroy = async function(req, res) {
    res.json({ message: 'Vous êtes sur la route DELETE des spot' });
}

module.exports = { get, post, put, destroy };