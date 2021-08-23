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
    }
};

router.post('/product/create', (req,res) => {
    console.log(req.body.name)
    console.log(req.body.description)
    // image?
    console.log(req.body.category)
    console.log(req.body.price)
})

module.exports = controller