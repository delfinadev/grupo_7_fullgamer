const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");
const multer = require('multer');

router.get("/", productController.index);

router.get("/create", productController.create);

router.get("/detail/:id", productController.detail);

router.get("/:id/edit", productController.edit);

router.post("/", upload.array('product-img'), productController.store);

//linkea la funcionalidad del controller 

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

//acá van todas las rutas que se ven en el browser, esto se exporta a app.js 
