const { Router } = require("express");
const routerProducts = Router();
const uuid = require("uuid/v4");

routerProducts.get("/products", (req, res) => {
    res.send("home de products");
});

routerProducts.get("/new-product", (req, res) => {
    res.send("new-product");
});

routerProducts.get("/put-product", (req, res) => {
    res.send("updating product");
});

routerProducts.get("/del-product", (req, res) => {
    res.send("deleting product");
});

module.exports = routerProducts;
