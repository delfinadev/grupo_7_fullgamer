const db = require("../../../database/models");

controller = {
    list: (req, res) => {
        db.Productos.findAll({
            attributes: ["id", "name", "description"],
            include: [{ association: "categoria" }] 
        })
            .then((products) => {
                let productsList = [];

                products.forEach(function(product) {
                    productsList.push({
                        id: product.id,
                        name: product.name,
                        description: product.description,
                        category: product.categoria.name,
                        detail: "/api/products/" + product.id
                    })
                });

                let categories = {
                    microfono: 1,
                    mouse: 1,
                    capturadora: 1,
                    mousePad: 1,
                    teclado: 2,
                    gabinete: 1,
                    auriculares: 1
                };
            
                return res.json({
                    count: products.length,
                    countByCategory: categories,
                    products: productsList
                })
            })
            .catch(error => {
                    console.log(error);
                });
    },
    detail: (req, res) => {
        db.Productos.findByPk(req.params.id, {
            include: [{ association: "categoria" }, { association: "imagenes" }]
        })
            .then(product => {
                return res.json({
                    id: product.id,
                    name: product.name,
                    description: product.description,
                    category: product.categoria.name,
                    url: "/img/" + product.imagenes[0].name
                });
            })
            .catch(error => {
                console.log(error);
            });
    }
}

module.exports = controller;