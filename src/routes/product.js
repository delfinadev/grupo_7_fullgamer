const express = require("express");
const router = express.Router();
const path = require("path");
const productController = require("../controllers/productController");
const multer = require('multer');
const productValidations = require("../middlewares/productValidations");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/img/products');
    },
    filename: function (req, file, cb) {
        cb(null,
    `${Date.now()}_img_${path.extname(file.originalname)}`);
    }
});

const upload = multer({ storage: storage });

router.get("/", productController.index);

router.post("/search", productController.search);

router.get("/create", productController.create);

router.post("delete/:id", productController.destroy);

router.get("/detail/:id", productController.detail);

router.get("/carrito", productController.cart);

router.get("/:id/edit", productController.edit);

router.post("/edit/:id", productController.update)

router.put("/:id/edit", productValidations, productController.update);

router.post("/create", upload.array('image'), productValidations, productController.store);

router.delete("/:id", productController.destroy);

//linkea la funcionalidad del controller 

module.exports = router

//acá van todas las rutas que se ven en el browser, esto se exporta a app.js 
