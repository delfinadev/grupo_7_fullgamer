const express = require("express");

const controller = {
    index: (req, res) => {
        res.render("home");
    }
};

module.exports = controller