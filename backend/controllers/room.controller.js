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

module.exports = { get };