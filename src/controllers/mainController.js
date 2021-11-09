const fs = require("fs");
const path = require("path");

let db = require("../../database/models");

const controller = {
    index: (req, res) => {
        db.Productos.findAll({
            include: [{ association: "imagenes" }]
        })
            .then(function(products) {
                res.render("home", {products: products, session: req.session});
            });
    }
};

module.exports = controller