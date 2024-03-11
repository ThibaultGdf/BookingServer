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

const post = async function(req, res, next) {
    
};

const put = async function(req, res, next) {
    
};

const destroy = async function(req, res, next) {
    
};

module.exports = { get, post, put, destroy };