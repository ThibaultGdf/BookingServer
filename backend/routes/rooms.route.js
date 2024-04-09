var express = require("express");
var router = express.Router();
var roomController = require("../controllers/room.controller.js");
var authenticateMiddleware = require("../middlewares/authenticate.middleware.js");

/* GET */
router.get("/", roomController.getAll);
router.get("/:id", roomController.getOne);

/* POST */
router.post("/", authenticateMiddleware.isAdmin, roomController.post);

/* PUT */
router.put("/:id", authenticateMiddleware.isAdmin, roomController.put);

/* DELETE */
router.delete("/:id", authenticateMiddleware.isAdmin, roomController.destroy);

module.exports = router;
