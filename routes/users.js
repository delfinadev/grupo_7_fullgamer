const express = require("express");
const router = express.Router();

const usersController = require("../controllers/usersController");
const registerValidations = require("../middlewares/registerValidations");

router.get("/register", usersController.register);
router.get("/login", usersController.login);
router.post("/register", registerValidations, usersController.store);

module.exports = router