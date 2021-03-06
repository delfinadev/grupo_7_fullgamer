const express = require("express");
const router = express.Router();
const path = require("path");
const multer = require("multer");

const usersController = require("../controllers/usersController");
const registerValidations = require("../middlewares/registerValidations");
const loginValidations = require("../middlewares/loginValidations");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./public/img/users");
    },
    filename: function (req, file, cb) {
        cb(null, req.body.name + "-" + Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage });

router.get("/register", usersController.register);
router.post("/register", upload.single("image"), registerValidations, usersController.store);

router.get("/login", usersController.login);
router.post("/login", loginValidations, usersController.processLogin);
router.delete("/logout", usersController.logout);

router.get("/:id", usersController.userProfile);

router.put("/edit/:id", upload.single("image"), usersController.update);
router.delete("/destroy/:id", usersController.destroy);

module.exports = router;