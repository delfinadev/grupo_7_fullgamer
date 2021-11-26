const fs = require("fs");
const path = require("path");

let db = require("../../database/models");

let users = db.Usuarios;

function logUserIfCookieExists (req, res, next) {
    if(req.cookies.recordarme) {
        let index = req.cookies.recordarme;
        for (let i = 0; i < users.length; i++) {
            if (index === i) {
                req.session.userId = index;
                req.session.user = users[i].user;
                req.session.email = users[i].email;
                req.session.image = users[i].image;
                console.log(req.session);
                req.session.save();
            };
        };
    };
    next();
};

module.exports = logUserIfCookieExists;