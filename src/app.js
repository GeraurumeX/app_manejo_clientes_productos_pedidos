const express = require("express");
const app = express();
const path = require("path");
const morgan = require("morgan");

const bodyParser = require("body-parser");

// Settings
app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Middlewares
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use(require("./routes/clients/routesClients"));
app.use(require("./routes/products/routesProducts"));

// Static
app.use(express.static(path.join(__dirname, "public")));

// 404 handler
app.use((req, res, next) => {
    res.status(404).send("404 Not Found");
});

module.exports = app;
