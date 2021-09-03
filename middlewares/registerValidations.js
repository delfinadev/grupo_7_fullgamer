const { body } = require("express-validator");

//let password1 = req.body.password1;

const validations = [
    body("name")
    .isEmpty().withMessage("Debes ingresar un usuario").bail()
    .isLength({min: 8}).withMessage("Tu usuario debe tener al menos 8 caracteres").bail(),

    body("email")
    .isEmpty().withMessage("Debes ingresar un correo electrónico").bail()
    .isEmail().withMessage("Debes ingresar un email válido").bail(),

    body("password1")
    .isEmpty().withMessage("Debes ingresar una contraseña").bail()
    .isLength({min: 8, max: 12}).withMessage("La contraseña debe tener entre 8 a 12 caracteres").bail(),

    //body("password2")
    //.equals(password1).withMessage("Las contraseñas deben ser iguales").bail()

];

module.exports = validations;