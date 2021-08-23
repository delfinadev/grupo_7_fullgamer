const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

router.get("/", productController.index);

router.get("/create", productController.create);

router.get("/detail/:id", productController.detail);

router.get("/:id/edit", productController.edit);

router.post('/create', (req,res) => {res.render('create')});

module.exports = router