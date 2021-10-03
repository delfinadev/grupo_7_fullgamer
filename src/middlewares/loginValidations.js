const path = require("path");
const fs = require("fs");
const { text } = require("express");
const bcrypt = require("bcryptjs");
const { check } = require("express-validator");

let readUsers = fs.readFileSync(path.resolve(__dirname, "../data/usuarios.json"), { encoded: "utf-8" });
let users = JSON.parse(readUsers, null, 4);

// 1. leer el json de usuarios
// 2. validar la contraseña


const loginValidations = [
    check('email')
        .custom(async (email) => {
            for (let i = 0; i < users.length; i++)
                if (users[i].email == email) {
                    var indexUsuario = i;
                }
            if (indexUsuario == undefined) {
                throw new Error("El email no está registrado")
            }
        }).bail(),


    check('password')
        .custom(async (password, { req }) => {
            if (indexUsuario !== undefined) {
                if (bcrypt.compareSync(password, users[indexUsuario].password) === false) {
                    throw new Error('Contraseña inválida. Intente de nuevo.')
                }
            }
        }).bail(),
]

module.exports = loginValidations;
