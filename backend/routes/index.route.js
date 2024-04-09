var express = require("express");
var router = express.Router();

/* GET home page. */
const reservationRouter = require("./reservations.route");
const roomRouter = require("./rooms.route");
const spotRouter = require("./spots.route");
const userRouter = require("./users.route");
const membershipRouter = require("./memberships.route.js");

router.use("/reservations", reservationRouter);
router.use("/rooms", roomRouter);
router.use("/spots", spotRouter);
router.use("/users", userRouter);
router.use("/memberships", membershipRouter);

module.exports = router;
