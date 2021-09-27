const path = require("path");
const fs = require("fs");
const { text } = require("express");
const { hash } = require("bcryptjs");
const { check } = require("express-validator");

let readUsers = fs.readFileSync(path.resolve(__dirname, "../data/usuarios.json"), {encoded: "utf-8"});
let users = JSON.parse(readUsers, null, 4);

// 1. leer el json de usuarios
// 2. validar la contraseña con comparesync

const loginValidations = [
    check('password')
    .check('email').isEmail().withMessage('Email inválido')
    .check('password').isLength({min: 8}).withMessage('La contraseña debe tener al menos 8 caracteres')
    .custom(bycrypt.compareSync (password, hash) => { {
        if(users[i].email == email) {
            throw new Error("Contraseña inválida. Intente de nuevo.");};
        };};
];

