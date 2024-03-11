var express = require('express');
var router = express.Router();
var spotController = require('../controllers/spot.controller.js')

/* GET */
router.get('/', spotController.get);

/* POST */
router.post('/', function(req, res, next) {
    res.json({ message: 'Vous êtes sur la route POST des spots' });
});

  /* PUT */
router.put('/', function(req, res, next) {
    res.json({ message: 'Vous êtes sur la route PUT des spots' });
});

  /* DELETE */
router.delete('/', function(req, res, next) {
    res.json({ message: 'Vous êtes sur la route DELETE des spots' });
});

module.exports = router;