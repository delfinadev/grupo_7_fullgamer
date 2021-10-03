const path = require("path");
const fs = require("fs");
const bcrypt = require("bcryptjs");

let readUsers = fs.readFileSync(path.resolve(__dirname, "../data/usuarios.json"), {encoded: "utf-8"});
let users = JSON.parse(readUsers, null, 4);

//Usé el for para encriptar las contraseñas que ya teníamos en el json
//for (let i = 0; i < users.length; i++) {
    //console.log(bcrypt.hashSync(users[i].password, 10));
//}

const { validationResult } = require("express-validator");

const controller = {
    register: (req, res) => {
        res.render("register", {errorMessages: null, old: null});
    },
    login: (req, res) => {
        res.render("login");
    },
    // ------logica del login-------
    processLogin: (req, res) => {
        let errors = validationResult(req);

        console.log(errors.mapped());
        if(!errors.isEmpty()){
            res.render("login", {errorMessages: errors.mapped(), old: req.body})
        } else {
        for(let i = 0; i < users.length; i++)
        if (users[i].email == req.body.email)
        {let usuarioALoguearse = users[i];
        req.session.usuarioLogueado = usuarioALoguearse;
        }
        res.redirect('/');
        }

        
    // ------logica del login-------
    },
    store: (req, res) => {
        let errores = validationResult(req);

        if(!errores.isEmpty()) {
            console.log(errores.mapped());
            //Borrar la imagen si es que hay errores:
            if (req.file) {
                let imagePath = path.resolve(__dirname, "../../public/img/users") + "/" + req.file.filename;
                fs.unlinkSync(imagePath);
            };
            res.render("register", {errorMessages: errores.mapped(), old: req.body});
        } else {
            var newUser = {
                "user": req.body.name,
                "email": req.body.email,
                "password": bcrypt.hashSync(req.body.password1, 10),
                "notifications": req.body.notificaciones !== undefined ? "on" : "off",
                "image": req.file ? req.file.filename : "user-default.jpg"
            };

            req.session.name = req.body.name;
            req.session.email = req.body.email;
            req.session.avatar = req.file ? req.file.filename : "user-default.jpg";

            if(req.body.recordarme !== undefined) {
                let index = users.length + 1;
                res.cookie("recordarme", index, {maxAge: 6000000});
                console.log(req.cookies.recordarme);
            };

            users.push(newUser);
            let newUsers = JSON.stringify(users, null, 4);
            fs.writeFileSync(path.resolve(__dirname, "../data/usuarios.json"), newUsers);

            res.redirect("/");
        };
    }
};

module.exports = controller;