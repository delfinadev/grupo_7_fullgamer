const express = require("express");
const router = express.Router();
const carritoController = require("../controllers/carritoControler");

router.get("/", carritoController.index);

module.exports = router