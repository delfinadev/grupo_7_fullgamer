const path = require("path");
const fs = require("fs");
const bcrypt = require("bcryptjs");

let readUsers = fs.readFileSync(path.resolve(__dirname, "../data/usuarios.json"), {encoded: "utf-8"});
let users = JSON.parse(readUsers, null, 4);

const { validationResult } = require("express-validator");

const controller = {
    register: (req, res) => {
        res.render("register", {errorMessages: null, old: null});
    },
    login: (req, res) => {
        res.render("login");
    },
    store: (req, res) => {
        let errores = validationResult(req);

        if(!errores.isEmpty()) {
            console.log(errores.mapped());
            res.render("register", {errorMessages: errores.mapped(), old: req.body});
        } else {
            let newUser = {
                "user": req.body.name,
                "email": req.body.email,
                "password": bcrypt.hashSync(req.body.password1, 10),
                "notifications": req.body.notificaciones !== undefined ? "on" : "off",
                "image": req.file ? req.file.filename : "user-default.jpg"
            };

            users.push(newUser);
            let newUsers = JSON.stringify(users, null, 4);
            fs.writeFileSync(path.resolve(__dirname, "../data/usuarios.json"), newUsers);

            res.redirect("/");
        };
    }
};

module.exports = controller;