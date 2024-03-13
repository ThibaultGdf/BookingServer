var express = require('express');
var router = express.Router();
var reservationController = require('../controllers/reservation.controller.js')

/* GET */
router.get('/', reservationController.getAll);
router.get('/:id', reservationController.getOne);

/* POST */
router.post('/', reservationController.post);

  /* PUT */
router.put('/:id', reservationController.put);

  /* DELETE */
router.delete('/:id', reservationController.destroy);

module.exports = router;