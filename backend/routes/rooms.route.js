var express = require('express');
var router = express.Router();
var roomController = require('../controllers/room.controller.js')

/* GET */
router.get('/', roomController.get);

/* POST */
router.post('/', roomController.post);

  /* PUT */
router.put('/', roomController.put);

  /* DELETE */
router.delete('/', roomController.destroy);

module.exports = router;