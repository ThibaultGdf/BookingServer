var express = require('express');
var router = express.Router();
var userController = require('../controllers/user.controller.js')

/* GET */
router.get('/', userController.get);

/* POST */
router.post('/', userController.post);

  /* PUT */
router.put('/', userController.put);

  /* DELETE */
router.delete('/', userController.destroy);

module.exports = router;