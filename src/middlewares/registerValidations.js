const path = require("path");
const fs = require("fs");

const { body, check } = require("express-validator");

let readUsers = fs.readFileSync(path.resolve(__dirname, "../data/usuarios.json"), {encoded: "utf-8"});
let users = JSON.parse(readUsers, null, 4);

const validations = [
    body("name")
    .notEmpty().withMessage("Debes ingresar un usuario").bail()
    .isLength({min: 8}).withMessage("Tu usuario debe tener al menos 8 caracteres").bail()
    .custom(async (user) => {
      for(let i = 0; i < users.length; i++) {
        if(users[i].user == user) {
          let randomNumber = Math.random() * 20;
          throw new Error("El usuario ya está en uso, le sugerimos: " + user + Math.floor(randomNumber));
        };
      };
    }).bail(),

    body("email")
    .notEmpty().withMessage("Debes ingresar un correo electrónico").bail()
    .isEmail().withMessage("Debes ingresar un email válido").bail()
    .custom(async (email) => {
      for(let i = 0; i < users.length; i++) {
        if(users[i].email == email) {
          throw new Error("El email ya está en uso");
        };
      };
    }).bail(),

    body("password1")
    .notEmpty().withMessage("Debes ingresar una contraseña").bail()
    .isLength({min: 8, max: 12}).withMessage("La contraseña debe tener entre 8 a 12 caracteres").bail()
    .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/, "i").withMessage("La contraseña debe contener al menos una mayúscula, una minúscula, un número y un caracter especial").bail(),

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