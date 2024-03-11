var express = require('express');
var router = express.Router();

/* GET */
router.get('/', async function(req, res, next) {
        try {
            const reservations = await Reservation.findAll()
            console.log(reservations);
            res.json({message:reservations});
        } catch(e) {
            res.json(e);
        }
    });

/* POST */
router.post('/', function(req, res, next) {
    res.json({ message: 'Vous êtes sur la route POST des reservations' });
});

  /* PUT */
router.put('/', function(req, res, next) {
    res.json({ message: 'Vous êtes sur la route PUT des reservations' });
});

  /* DELETE */
router.delete('/', function(req, res, next) {
    res.json({ message: 'Vous êtes sur la route DELETE des reservations' });
});

module.exports = router;