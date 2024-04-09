var express = require("express");
var router = express.Router();
var membershipController = require("../controllers/membership.controller.js");

/* GET */
router.get("/", membershipController.getAll);
router.get("/:id", membershipController.getOne);

/* POST */
router.post("/", membershipController.post);

/* PUT */
router.put("/:id", membershipController.put);

/* DELETE */
router.delete("/:id", membershipController.destroy);

module.exports = router;
