const express = require("express");
const path = require("path");
const app = express();

const mainRoutes = require("./routes/main");
const loginRoutes = require("./routes/login");
const registerRoutes = require("./routes/register");
const productRoutes = require("./routes/product");
const carritoRoutes = require("./routes/carrito");

app.set("view engine", "ejs");

app.listen(3000, () => {
    console.log("Servidor corriendo en el puerto 3000");
});

app.use(express.static(path.resolve(__dirname, "./public")));
app.use("/", mainRoutes);
app.use("/register", registerRoutes);
app.use("/login", loginRoutes);
app.use("/carrito", carritoRoutes);
app.use("/products", productRoutes);

app.get("/HowDidYouFoundThis", (req, res) => {
    res.sendFile(path.resolve(__dirname, "views/EasterEgg.html"));
});
