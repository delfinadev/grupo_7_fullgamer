const express = require('express');
const router = express.Router();
const productController = require('../../controllers/api/productController');

router.get("/", productController.list);
router.get("/:id", productController.detail);

module.exports = router;