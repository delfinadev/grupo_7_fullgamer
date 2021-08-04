const express = require("express");

const controller = {
    index: (req, res) => {
        res.render("producto");
    },
    edit: (req, res) => {
        res.render("");
    }
};

module.exports = controller