var express = require('express');
var router = express.Router();
var roomController = require('../controllers/room.controller.js')

/* GET */
router.get('/', roomController.getAll);
router.get('/:id', roomController.getOne);

/* POST */
router.post('/', roomController.post);

  /* PUT */
router.put('/:id', roomController.put);

  /* DELETE */
router.delete('/:id', roomController.destroy);

module.exports = router;