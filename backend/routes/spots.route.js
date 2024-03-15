var express = require('express');
var router = express.Router();
var spotController = require('../controllers/spot.controller.js')
var authenticateMiddleware = require('../middlewares/authenticate.middleware.js');

/* GET */
router.get('/', spotController.getAll);
router.get('/:id', spotController.getOne);

/* POST */
router.post('/', authenticateMiddleware.isAdmin, spotController.post);

  /* PUT */
router.put('/:id', authenticateMiddleware.isAdmin, spotController.put);

  /* DELETE */
router.delete('/:id', authenticateMiddleware.isAdmin, spotController.destroy);

module.exports = router;