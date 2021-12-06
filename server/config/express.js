var express = require("express");
var app = express();
var path = require("path");
var routes = require('../app/router/wirelesstoolsRoute');
var bodyParser = require('body-parser');

app.set("heatmap", path.join(__dirname, "../..", "src"));
app.use(express.static(app.get("heatmap")));
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});

routes(app);
module.exports = app;