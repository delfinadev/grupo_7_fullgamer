let db = require("../../database/models");
const Op = db.Sequelize.Op;
const { validationResult } = require("express-validator");

const controller = {
    index: (req, res) => {
        db.Productos.findAll({
            include: [{ association: "imagenes" }]
        })
            .then(function (products) {
                res.render("listadoProductos", { products: products, session: req.session });
            });
    },
    create: (req, res) => {
        res.render("agregarProducto", { product: null, session: req.session });
    },
    detail: (req, res) => {
        let id = req.params.id;
        db.Productos.findOne({
            where: {
                id: id
            },
            include: [{ association: "imagenes" }]
        })
            .then(function (product) {
                res.render("producto", { product: product, session: req.session });
            });
    },
    edit: (req, res) => {
        let id = req.params.id;
        db.Productos.findByPk(id, {
            include: [{ association: "imagenes" }]
        })
            .then(function (product) {
                res.render("agregarProducto", { product: product, session: req.session });
            });
    },
    store: (req, res) => {
        let errors = validationResult(req);
        console.log(errors.mapped());

        if (!errors.isEmpty()) {
            res.render("agregarProducto", {errorMessages: errors.mapped()});
        } else {
            db.Productos.create({
                name: req.body.name,
                price: req.body.price,
                description: req.body.description,
                category_id: req.body.category,
                created_at: Date.now()
            })
                .then((product) => {
                    console.log(product)
            })
    
            db.Productos.findByPk(db.Productos.length)
                .then(product => {
                    if(req.file) {
                    db.Imagenes.create({
                        name: req.file.filename,
                        product_id: product.id
                    })
                        .then(() => {
                            res.redirect("/products");
                        })
                    }
                })
        }
    },
    update: function (req, res) {
        let errors = validationResult(req);
        console.log(errors.mapped());

        if (!errors.isEmpty()) {
            res.render("agregarProducto", {errorMessages: errors.mapped()});
        } else {
            db.Productos.update({
                name: req.body.name,
                price: req.body.price,
                description: req.body.description,
                category_id: req.body.category,
                created_at: Date.now()
            }, {
                where: {
                    id: req.params.id
                }
            })
            .then(() => {
                res.redirect("/products");
            })
        }
        
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
        if (req.session) {
            res.render("carrito", { session: req.session });
        } else {
            res.render("carrito", { session: null });
        };
    },
    search: (req, res) => {
        let search = req.body.buscar;
        db.Productos.findAll({
            where: {
                name: { [Op.like]: "%" + search + "%" }
            },
            limit: 5
        })
            .then(searchProducts => {
                req.session.searchResults = searchProducts;
                console.log(req.session.searchResults);
            })
                .then (() => {
                    res.status(204).send();
                })
    }
};

//acá está la funcionalidad que luego se exporta a routes

//res.render renderiza las vistas, manda la información 

module.exports = controller