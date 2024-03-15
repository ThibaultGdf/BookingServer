var express = require('express');
var router = express.Router();
var reservationController = require('../controllers/reservation.controller.js');
var authenticateMiddleware = require('../middlewares/authenticate.middleware.js');

/* GET */
router.get('/', authenticateMiddleware.isAdmin, reservationController.getAll);
// router.getUserReservation('/', authenticateMiddleware.isAdmin, reservationController.getAll);
router.get('/:id', reservationController.getOne);

/* POST */
router.post('/', reservationController.post);

  /* PUT */
router.put('/:id', reservationController.put);

  /* DELETE */
  // Route pour annuler reservation par le client
router.delete('/:id', authenticateMiddleware.isAdmin, reservationController.destroy);

module.exports = router;