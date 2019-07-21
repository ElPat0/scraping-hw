// dependecies
var express = require("express");
var exphbs = require("express-handlebars");
var logger = require("morgan");
var mongoose = require("mongoose");
var axios = require("axios");
var cheerio = require("cheerio");

var db = require("./models");

var app = express();
var PORT = process.env.PORT || 3000;

// Middleware
app.use(logger("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

// conneting to Mongo DB
mongoose.connect("mongodb://localhost/unit18Populater", { useNewUrlParser: true });

// Handlebars
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main",
    registerPartial: "articles"
  })
);
app.set("view engine", "handlebars");

// Routes

require("./routes/htmlRoute")(app);

require("./routes/scrapingRoute")(app);




app.listen(PORT, function() {
  console.log("App running on port " + PORT + "!");
});


module.exports = app;


