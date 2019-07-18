
var express = require("express");
var exphbs = require("express-handlebars");
var mongoose = require("mongoose");
var axios = require("axios");
var cheerio = require("cheerio");

//var db = require("./models");

var app = express();
var PORT = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

////passport stuffs
//app.use
//  session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
//);
//app.use(passport.initialize());
//app.use(passport.session());

// Handlebars
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");

// Routes
//require("./routes/loginRoutes")(app);
//require("./routes/sellerRoutes")(app);
//require("./routes/reviewRoutes")(app);
//require("./routes/productRoutes")(app);
//require("./routes/htmlRoutes")(app);

app.listen(PORT, function() {
  console.log("App running on port " + PORT + "!");
});


module.exports = app;

