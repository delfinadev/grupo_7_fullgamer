const path = require("path");
const fs = require("fs");

let db = require("../../database/models");

const { body, check } = require("express-validator");

let producto;

db.Productos.findAll()
  .then(function(productos) {
    producto = productos;
  });

  const validations = [
    body("name")
    .notEmpty().withMessage("Debes ingresar el nombre del producto").bail()
    .isLength({min: 5}).withMessage("El nombre debe tener al menos 5 caracteres").bail(),

    body("description")
    .isLength({min: 20}).withMessage("La descripción del producto debe tener al menos 20 caracteres").bail(),

    // verificacion de que existen los valores: en el select se corrobora que no se pueda enviar una categoria
    // imagenes: en la ruta de productos

];

module.exports = validations;