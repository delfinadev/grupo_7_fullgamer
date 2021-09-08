const fs = require("fs");
const path = require("path");

let leerProductos = fs.readFileSync(path.resolve(__dirname, "../data/products.json"), { encoded: "utf-8"});
let products = JSON.parse(leerProductos);

const controller = {
    index: (req, res) => {
        res.render("home", {products: products});
    }
};

module.exports = controller