const fs = require("fs");
const path = require("path");

let db = require("../../database/models");

const controller = {
    index: (req, res) => {
        db.Productos.findAll()
            .then(function(products) {
                res.render("listadoProductos", { products: products });
            });
    },
    create: (req, res) => {
        res.render("agregarProducto", { product: null });
    },
    detail: (req, res) => {
        let id = req.params.id;
        db.Productos.findByPk(id)
            .then(function(product) {
                res.render("producto", { product: product });
            });
    },
    edit: (req, res) => {
        let id = req.params.id;
        db.Productos.findByPk(id)
            .then(function(product) {
                res.render("agregarProducto", { product: product });
            });
    },
    store: (req, res) => {
        db.Productos.create({
            name: req.body.name,
            price: req.body.price, 
            description: req.body.description,
            category_id: req.body.category,
            created_at: Date.now()
        })
            .then(() => {
                res.redirect("/products");
            });
    },
    edit: function(req, res) {
         db.Productos.findByPk(req.params.id)
         .then(function(product){
             res.render("agregarProducto", {product:product});
         })
    },
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
    destroy: (req, res) => {
    db.Productos.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(() => {
            res.redirect("/products");
        })
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