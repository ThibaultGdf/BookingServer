var express = require('express');
var router = express.Router();
var userController = require('../controllers/user.controller.js')

/* GET */
router.get('/', userController.getAll);
router.get('/:id', userController.getOne);

  /* PUT */
router.put('/:id', userController.put);

  /* DELETE */
router.delete('/:id', userController.destroy);

module.exports = router;