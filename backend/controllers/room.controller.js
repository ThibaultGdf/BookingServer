const { Room } = require('../config/db.js');

const get = async function(req, res) {
    try {
        const rooms = await Room.findAll()
        console.log(rooms);
        res.status(200).json({ rooms })
    } catch(error) {
        res.json(error);
    }
};

const post = async function(req, res) {
    res.json({ message: 'Vous êtes sur la route POST des rooms' });
}

const put = async function(req, res) {
    res.json({ message: 'Vous êtes sur la route PUT des rooms' });
}

const destroy = async function(req, res) {
    res.json({ message: 'Vous êtes sur la route DELETE des rooms' });
}

module.exports = { get, post, put, destroy };