const path = require("path");
const fs = require("fs");
const { text } = require("express");
const { bycrypt } = require("bcryptjs");
const { check } = require("express-validator");

let readUsers = fs.readFileSync(path.resolve(__dirname, "../data/usuarios.json"), {encoded: "utf-8"});
let users = JSON.parse(readUsers, null, 4);

// 1. leer el json de usuarios
// 2. validar la contraseña


const loginValidations = [
    check('email')
    .custom(async (email) => {
        for(let i = 0; i < users.length; i++)
            if(users[i].email == email) {
                let indexUsuario = i;
        }
        if (indexUsuario == undefined){
            throw new error("El email no está registrado")
        }
    }).bail(),


    check('password')
        .custom(async (password) => {
        const password = req.body.password,
            if(bcrypt.compareSync(password, users[indexUsuario]. password)){
                throw new Error('Contraseña inválida. Intente de nuevo.')}
    }),
]
