const fs = require("fs");
const path = require("path");

let leerProductos = fs.readFileSync(path.resolve(__dirname, "../data/products.json"), { encoded: "utf-8"});
let products = JSON.parse(leerProductos);

const controller = {
    index: (req, res) => {
        res.render("listadoProductos", {products: products});
    },
    create: (req, res) => {
        res.render("agregarProducto");
    },
    detail: (req, res) => {
        let id = req.params.id;
        res.render("producto", {product: products[id]});
    }
};

module.exports = controller