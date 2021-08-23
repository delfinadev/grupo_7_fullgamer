const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");
const multer = require('multer');

router.get("/", productController.index);

router.get("/create", productController.create);

router.get("/detail/:id", productController.detail);

router.get("/:id/edit", productController.edit);

module.exports = router