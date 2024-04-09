var express = require("express");
var router = express.Router();
var userController = require("../controllers/user.controller.js");
var authenticateMiddleware = require("../middlewares/authenticate.middleware.js");

/* GET */
router.get("/", authenticateMiddleware.isAdmin, userController.getAll);
router.get("/:id", userController.getOne);

/* PUT */
router.put("/:id", userController.put);

/* PUT */
router.put(
    "/editRole/:id",
    authenticateMiddleware.isAdmin,
    userController.editRole,
);

/* DELETE */
router.delete("/:id", userController.destroy);

module.exports = router;
