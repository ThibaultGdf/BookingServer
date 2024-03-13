const { User } = require('../config/db.js');

const get = async function(req, res, next) {
    try {
        const users = await User.findAll()
        console.log(users);
        res.status(200).json({ users })
    } catch(error) {
        res.json(error);
    }
};

const post = async function(req, res) {
    res.json({ message: 'Vous êtes sur la route POST des users' });
}

const put = async function(req, res) {
    res.json({ message: 'Vous êtes sur la route PUT des users' });
}

const destroy = async function(req, res) {
    res.json({ message: 'Vous êtes sur la route DELETE des users' });
}

module.exports = { get, post, put, destroy };