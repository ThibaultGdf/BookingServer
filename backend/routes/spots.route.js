var express = require('express');
var router = express.Router();
var spotController = require('../controllers/spot.controller.js')

/* GET */
router.get('/', spotController.get);

/* POST */
router.post('/', spotController.post);

  /* PUT */
router.put('/', spotController.put);

  /* DELETE */
router.delete('/', spotController.destroy);

module.exports = router;