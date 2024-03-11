var express = require('express');
var router = express.Router();
var roomController = require('../controllers/room.controller.js')

/* GET */
router.get('/', roomController.get);

/* POST */
router.post('/', function(req, res, next) {
    res.json({ message: 'Vous êtes sur la route POST des rooms' });
});

  /* PUT */
router.put('/', function(req, res, next) {
    res.json({ message: 'Vous êtes sur la route PUT des rooms' });
});

  /* DELETE */
router.delete('/', function(req, res, next) {
    res.json({ message: 'Vous êtes sur la route DELETE des rooms' });
});

module.exports = router;