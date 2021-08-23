const express = require("express");

const controller = {
    index: (req, res) => {
        let id = req.params.id;
        res.render("listadoProductos");
    },
    create: (req, res) => {
        res.render("agregarProducto");
    },
    detail: (req, res) => {
        res.render("producto");
    }
};

router.post('/create', (req,res) => {res.render('create')});

module.exports = controller