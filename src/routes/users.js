const express = require("express");
const router = express.Router();
const path = require("path");
const multer = require("multer");

const usersController = require("../controllers/usersController");
const registerValidations = require("../middlewares/registerValidations");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./public/img/users");
    },
    filename: function (req, file, cb) {
        cb(null, req.file + "-" + Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage });

router.get("/register", usersController.register);
router.post("/register", registerValidations, upload.single("image"), usersController.store);

router.get("/login", usersController.login);


module.exports = router