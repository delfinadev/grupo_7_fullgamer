const fs = require("fs");
const path = require("path");

let db = require("../../database/models");

const controller = {
    index: (req, res) => {
        res.render("listadoProductos", { products: products });
    },
    create: (req, res) => {
        res.render("agregarProducto", { product: null });
    },
    detail: (req, res) => {
        let id = req.params.id;
        res.render("producto", { product: products[id] });
    },
    edit: (req, res) => {
        let id = req.params.id;
        res.render("agregarProducto", { product: products[id] });
    },
    store: (req, res) => {
        db.Productos.create({
            name: req.body.name,
            price: req.body.price, 
            description: req.body.description
        });

        let newProduct = {
            "id": products.length,
            "name": req.body.name,
            "description": req.body.description,
            "image": req.file.filename,
            "image2": "mouse-segunda-foto.jpg",
            "category": req.body.category,
            "price": req.body.price,
            "date": req.body.date
        };

        products.push(newProduct);
        let newProducts = JSON.stringify(products, null, 4);
        fs.writeFileSync(path.resolve(__dirname, "../data/products.json"), newProducts);

        res.redirect("/products");
    },
    // Editar un producto en el json
    update: (req, res) => {

        let id = req.params.id;

        products[id].name = req.body.name;
        products[id].price = req.body.price;
        products[id].description = req.body.description;
        if (req.body.image) {
            products[id].image = req.body.image;
        };
        products[id].category = req.body.category;
        products[id].date = req.body.date;
        
        let newProducts = JSON.stringify(products, null, 4);
        fs.writeFileSync(path.resolve(__dirname, "../data/products.json"), newProducts);

        res.redirect("/products");
    },
    //Eliminar un producto del json
    destroy: (req, res) => {
    db.Productos.destroy({
        where: {
            id: req.params.id
        }
    })

        let id = req.params.id;

        products.splice(id, 1);
        let newProducts = JSON.stringify(products, null, 4);
        fs.writeFileSync(path.resolve(__dirname, "../data/products.json"), newProducts);

        res.redirect("/products");
    },
    cart: (req, res) => {
        if(req.session) {
            res.render("carrito", {session: req.session});
        } else {
            res.render("carrito", {session: null});
        };
    }
};

//acá está la funcionalidad que luego se exporta a routes

//res.render renderiza las vistas, manda la información 

module.exports = controller