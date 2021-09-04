const express = require("express");
const path = require("path");
const app = express();
const methodOverride = require("method-override");

const mainRoutes = require("./src/routes/main");
const usersRoutes = require("./src/routes/users");
const productRoutes = require("./src/routes/product");
const carritoRoutes = require("./src/routes/carrito");

app.set("view engine", "ejs");
app.set('views', './src/views');

app.listen(3000, () => {
    console.log("Servidor corriendo en el puerto 3000");
});

app.use(express.urlencoded({extended : false}));
app.use(express.json());

app.use(express.static(path.resolve(__dirname, "./public")));
app.use(methodOverride("_method"));

app.use("/", mainRoutes);
app.use("/users", usersRoutes);
app.use("/carrito", carritoRoutes);
app.use("/products", productRoutes);


app.get("/HowDidYouFoundThis", (req, res) => {
    res.sendFile(path.resolve(__dirname, "src/views/EasterEgg.html"));
});
