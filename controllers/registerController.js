const express = require("express");

const controller = {
    index: (req, res) => {
        res.render("register");
    }
}

module.exports = controller