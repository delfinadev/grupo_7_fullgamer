const path = require("path");
const fs = require("fs");
const bcrypt = require("bcryptjs");

let db = require("../../database/models");

//Usé el for para encriptar las contraseñas que ya teníamos en el json
//for (let i = 0; i < users.length; i++) {
//console.log(bcrypt.hashSync(users[i].password, 10));
//}

db.Usuarios.findAll()
    .then(function (usuarios) {
        users = usuarios;
    });

const { validationResult } = require("express-validator");
const { localsName } = require("ejs");

const controller = {
    register: (req, res) => {
        res.render("register", { errorMessages: null, old: null, session: req.session });
    },
    login: (req, res) => {
        res.render("login", { session: req.session });
    },
    userProfile: (req, res) => {
        db.Usuarios.findOne({
            where: {
                id: req.params.id
            }
        })
            .then(function (user) {
                console.log(user);
                res.render("userProfile", { user: user, session: req.session });
            });
    },
    // ------logica del login-------
    processLogin: (req, res) => {
        let errors = validationResult(req);

        console.log(errors.mapped());
        if (!errors.isEmpty()) {
            res.render("login", { errorMessages: errors.mapped(), old: req.body, session: req.session })
        } else {
            db.Usuarios.findAll()
                .then(function (users) {
                    for (let i = 0; i < users.length; i++) {
                        if (users[i].email == req.body.email) {
                            req.session.userId = i + 1;
                            req.session.user = users[i].user;
                            req.session.email = users[i].email;
                            req.session.image = users[i].image;
                            req.session.role = users[i].role;
                            req.session.save();
                            console.log(req.session);
                            if (req.body.recordarme !== undefined) {
                                let index = i;
                                res.cookie("recordarme", index, { maxAge: 6000000 });
                                req.cookies.recordarme = index;
                                console.log(req.cookies.recordarme);
                            };
                        };
                    };
                    res.redirect('/');
                });
        }
    },

    logout: (req, res) => {
        if (req.session) {
            req.session.destroy(console.error());
            res.locals.session = null;
        };

        res.redirect("/");
    },
    store: (req, res) => {
        let errores = validationResult(req);

        if (!errores.isEmpty()) {
            console.log(errores.mapped());
            //Borrar la imagen si es que hay errores:
            if (req.file) {
                let imagePath = path.resolve(__dirname, "../../public/img/users") + "/" + req.file.filename;
                fs.unlinkSync(imagePath);
            };
            res.render("register", { errorMessages: errores.mapped(), old: req.body, session: req.session });
        } else {

            db.Usuarios.create({
                user: req.body.name,
                email: req.body.email,
                password: bcrypt.hashSync(req.body.password1, 10),
                image: req.file ? req.file.filename : "user-default.jpg",
                notifications: req.body.notificaciones !== undefined ? "on" : "off",
                role: 1
            })
                .then(function (user) {
                    req.session.userId = user.id;;
                    req.session.user = user.user;
                    req.session.email = user.email;
                    req.session.image = user.image;
                    req.session.role = 1;
                    req.session.save();

                    if (req.body.recordarme !== undefined) {
                        let index = users.length + 1;
                        res.cookie("recordarme", index, { maxAge: 6000000 });
                        req.cookies.recordarme = index;
                        console.log(req.cookies.recordarme);
                    };

                    res.redirect("/");
                });


            console.log(req.session);


        };
    },
    update: function (req, res) {
        db.Usuarios.update({
            user: req.body.name,
            email: req.body.email,
            image: req.file ? req.file.filename : "user-default.jpg",
        }, {
            where: {
                id: req.params.id
            }
        })
            .then(function () {
                req.session.user = req.body.name;
                req.session.email = req.body.email;
                req.session.image = req.file ? req.file.filename : "user-default.jpg";
                res.redirect("/");
            });
    },
    destroy: (req, res) => {
        db.Usuarios.findOne({
            where: {
                id: req.params.id
            }
        })
            .then(function(user) {
                if (user.image !== "user-default.jpg") {
                    let imagePath = path.resolve(__dirname, "../../public/img/users/") + user.image;
                    fs.unlinkSync(imagePath);
                }
            });

        db.Usuarios.destroy({
            where: {
                id: req.params.id
            }
        })
            .then(function (user) {
                req.session.destroy();
                res.redirect("/");
            });
    }
};

module.exports = controller;