const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const methodOverride = require("method-override");
const cookieParser = require("cookie-parser");
const session = require("express-session");

const mainRoutes = require("./src/routes/main");
const usersRoutes = require("./src/routes/users");
const productRoutes = require("./src/routes/product");

const rememberMe = require("./src/middlewares/rememberMe");

app.set("view engine", "ejs");
app.set('views', './src/views');

app.listen(3000, () => {
    console.log("Servidor corriendo en el puerto 3000");
});

app.use(express.urlencoded({extended : false}));
app.use(express.json());

app.use(express.static(path.resolve(__dirname, "./public")));
app.use(methodOverride("_method"));
app.use(cookieParser());
app.use(session({
    secret: "Secreto",
    resave: false,
    saveUninitialized: true
}));

app.use(function(req, res, next) {
    if(req.session.user !== undefined | req.session.user !== null){
        res.locals.session = req.session;
        console.log(res.locals.session);
    } else {
        res.locals.session = null;
    };
    next();
});

app.use("/", mainRoutes);
app.use("/users", usersRoutes);
app.use("/products", productRoutes);


app.get("/HowDidYouFoundThis", (req, res) => {
    res.sendFile(path.resolve(__dirname, "src/views/EasterEgg.html"));
});

