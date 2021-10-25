const path = require("path");
const fs = require("fs");
const bcrypt = require("bcryptjs");

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
            for(let i = 0; i < users.length; i++) {
                if (users[i].email == req.body.email) {
                    req.session.user = users[i].user;
                    req.session.email = users[i].email;
                    req.session.image = users[i].image;
                    req.session.save();
                    console.log(req.session);
                    if(req.body.recordarme !== undefined) {
                        let index = i;
                        res.cookie("recordarme", index, {maxAge: 6000000});
                        req.cookies.recordarme = index;
                        console.log(req.cookies.recordarme);
                    };
        }
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

            req.session.user = newUser.user;
            req.session.email = newUser.email;
            req.session.image = newUser.image;
            req.session.save();

            console.log(req.session);

            if(req.body.recordarme !== undefined) {
                let index = users.length + 1;
                res.cookie("recordarme", index, {maxAge: 6000000});
                req.cookies.recordarme = index;
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