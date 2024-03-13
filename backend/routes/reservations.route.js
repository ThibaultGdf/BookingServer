var express = require('express');
var router = express.Router();
var reservationController = require('../controllers/reservation.controller.js')

/* GET */
router.get('/', reservationController.get);

/* POST */
router.post('/', reservationController.post);

  /* PUT */
router.put('/', reservationController.put);

  /* DELETE */
router.delete('/', reservationController.destroy);

module.exports = router;