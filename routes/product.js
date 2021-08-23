const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");
const multer = require('multer');

router.get("/", productController.index);

router.get("/create", productController.create);

router.get("/detail/:id", productController.detail);

router.get("/:id/edit", productController.edit);

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/img')
    },
    filename: function (req, file, cb) {
        cb(null,
    `${Date.now()}_img_${path.extname(file.originalname)}`)
    }
})

const upload = multer ({ storage });

module.exports = router