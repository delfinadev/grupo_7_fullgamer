const fs = require("fs");
const path = require("path");

let leerProductos = fs.readFileSync(path.resolve(__dirname, "../data/products.json"), { encoded: "utf-8"});
let products = JSON.parse(leerProductos);

const controller = {
    index: (req, res) => {
        res.render("listadoProductos", {products: products});
    },
    create: (req, res) => {
        res.render("agregarProducto", {product: null});
    },
    detail: (req, res) => {
        let id = req.params.id;
        res.render("producto", {product: products[id]});
    },
    edit: (req, res) => {
        let id = req.params.id;
        res.render("agregarProducto", {product: products[id]});
    },
    store: (req, res) => {
        let newProduct = {
        "name": req.body.name,
        "description": req.body.description,
        "image": req.file,
        "category": req.body.category,
        "price": req.body.price,
        "date": req.body.date}

        let newProducts = products.push(newProduct);
        fs.writeFileSync(path.resolve(__dirname, "../data/products.json"), newProducts);
    }
};

products.splice(id)

//acá está la funcionalidad que luego se exporta a routes

//res.render renderiza las vistas, manda la información 

module.exports = controller