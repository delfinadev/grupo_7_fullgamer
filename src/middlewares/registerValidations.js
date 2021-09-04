const { body, check } = require("express-validator");

const validations = [
    body("name")
    .notEmpty().withMessage("Debes ingresar un usuario").bail()
    .isLength({min: 8}).withMessage("Tu usuario debe tener al menos 8 caracteres").bail(),

    body("email")
    .notEmpty().withMessage("Debes ingresar un correo electrónico").bail()
    .isEmail().withMessage("Debes ingresar un email válido").bail(),

    body("password1")
    .notEmpty().withMessage("Debes ingresar una contraseña").bail()
    .isLength({min: 8, max: 12}).withMessage("La contraseña debe tener entre 8 a 12 caracteres").bail(),

    body("password2")
    .trim()
    .custom(async (confirmPassword, {req}) => {
      const password = req.body.password1;
      if(password !== confirmPassword) {
        throw new Error("Las contraseñas deben coincidir");
      };
    })
    

];

module.exports = validations;