var express = require('express');
var router = express.Router();

/* GET */
router.get('/', function(req, res, next) {
    res.json({ message: 'Vous êtes sur la route GET des users' });
});

/* POST */
router.post('/', function(req, res, next) {
    res.json({ message: 'Vous êtes sur la route POST des users' });
});

  /* PUT */
router.put('/', function(req, res, next) {
    res.json({ message: 'Vous êtes sur la route PUT des users' });
});

  /* DELETE */
router.delete('/', function(req, res, next) {
    res.json({ message: 'Vous êtes sur la route DELETE des users' });
});

module.exports = router;