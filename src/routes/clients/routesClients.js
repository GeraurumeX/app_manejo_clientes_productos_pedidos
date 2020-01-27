const { Router } = require("express");
const routerClients = Router();
const uuid = require("uuid/v4");

routerClients.get("/clients", (req, res) => {
    res.send("home de clientes");
});

routerClients.get("/new-client", (req, res) => {
    res.send("new-client");
});

routerClients.get("/put-client", (req, res) => {
    res.send("updating client");
});

routerClients.get("/del-client", (req, res) => {
    res.send("deleting client");
});

module.exports = routerClients;
