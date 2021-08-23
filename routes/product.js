const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

router.get("/", productController.index);

router.get("/create", productController.create);

<<<<<<< HEAD
router.get("/detail", productController.detail);
=======
router.get("/detail/:id", productController.detail);

router.get("/:id/edit", productController.edit);
>>>>>>> 943e595c2737933841392bb682cf0706c254ab60

module.exports = router