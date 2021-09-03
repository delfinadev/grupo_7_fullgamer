const path = require("path");
const fs = require("fs");
const bcrypt = require("bcryptjs");

let readUsers = fs.readFileSync(path.resolve(__dirname, "../data/usuarios.json"));
let users = JSON.parse(readUsers);

const { validationResult } = require("express-validator");

const controller = {
    register: (req, res) => {
        res.render("register", {errorMessages: null}, {old: null});
    },
    login: (req, res) => {
        res.render("login");
    },
    store: (req, res) => {
        let errores = validationResult(req);
        if(!errores.isEmpty()) {
            res.render("register", {errorMessages: errores.mapped()}, {old: req.body});
        } else {
            let newUser = {
                user: req.body.name,
                email: req.body.email,
                password: bcrypt.hashSync(req.body.password1, 10),
                notifications: req.body.notificaciones !== undefined ? "on" : "off",
                image: req.file ? req.file : "user-default.jpg"
            };
            users.push(newUser);
            JSON.stringify(users, null, 4);
            fs.writeFileSync(path.resolve(__dirname, "../data/usuarios.json"), users);

            res.redirect("/");
        }
    }
}

module.exports = controller