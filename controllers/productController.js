const express = require("express");

const controller = {
    index: (req, res) => {
        let id = req.params.id;
        res.render("producto");
    },
    create: (req, res) => {
        res.render("agregarProducto");
    }
};

module.exports = controller