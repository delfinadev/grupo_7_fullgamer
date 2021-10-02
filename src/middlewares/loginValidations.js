const path = require("path");
const fs = require("fs");
const { text } = require("express");
const { hash } = require("bcryptjs");
const { check } = require("express-validator");

let readUsers = fs.readFileSync(path.resolve(__dirname, "../data/usuarios.json"), {encoded: "utf-8"});
let users = JSON.parse(readUsers, null, 4);

// 1. leer el json de usuarios
// 2. validar la contraseña

const loginValidations = [
    check('email')
    .custom(async (email) => {
        if(users[i].email != email) {
            throw new error("El email no está registrado")
        }
    }).bail(),


    check('password')
    // .isEmail().withMessage('Email inválido')
    // .isLength({min: 8}).withMessage('La contraseña debe tener al menos 8 caracteres')
    // .custom(bycrypt.compareSync (password, hash)) => { {
    //     if(users[i].email == email) 
// no se de donde saque esta parte del if para el email pero no me cierra
.custom(async (password) => {
    const password = req.body.password,
    if(password !== confirmPassword){
        throw new Error('Contraseña inválida. Intente de nuevo.')}
    }),
]
