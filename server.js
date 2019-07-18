var express = require("express");
var exphbs = require("express-handlebars");

//var logger = require("morgan");
var mongoose = require("mongoose");

// Our scraping tools
// Axios is a promised-based http library, similar to jQuery's Ajax method
// It works on the client and on the server
var axios = require("axios");
var cheerio = require("cheerio");

// Require all models
//var db = require("./models");

var PORT = 3000;

// Initialize Express
var app = express();

// Configure middleware
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Use morgan logger for logging requests
//app.use(logger("dev"));
// Parse request body as JSON
//app.use(express.urlencoded({ extended: true }));
//app.use(express.json());
// Make public a static folder
app.use(express.static("public"));

// Connect to the Mongo DB
//mongoose.connect("mongodb://localhost/unit18Populater", { useNewUrlParser: true });

// Routes

// A GET route for scraping the echoJS website
//app.get("/scrape", function(req, res) {
  // First, we grab the body of the html with axios
 // axios.get("https://www.wsj.com").then(function(response) {

  // Load the HTML into cheerio and save it to a variable
  // '$' becomes a shorthand for cheerio's selector commands, much like jQuery's '$'
  //var $ = cheerio.load(response.data);

  // An empty array to save the data that we'll scrape
  //var results = [];

  // Select each element in the HTML body from which you want information.
  // NOTE: Cheerio selectors function similarly to jQuery's selectors,
  // but be sure to visit the package's npm page to see how it works
  //$("article").each(function(i, element) {

    //var title = $(element).children().text();
    //var link = $(element).find("a").attr("href");

    // Save these results in an object that we'll push into the results array we defined earlier
    //results.push({
      //title: title,
      //link: link
    //});
  //});

  // Log the results once you've looped through each of the elements found with cheerio
  //console.log(results);
//});
//});

// Route for getting all Articles from the db
//app.get("/articles", function(req, res) {
  // TODO: Finish the route so it grabs all of the articles
  //db.Article.find({})
  //.then(function(dbArticle) {
    //res.json(dbArticle);
  //})
  //.catch(function(err) {
    //res.json(err);
  //})
//});

// Route for grabbing a specific Article by id, populate it with it's note
//app.get("/articles/:id", function(req, res) {
  // TODO
  // ====
  // Finish the route so it finds one article using the req.params.id,
  // and run the populate method with "note",
  // then responds with the article with the note included
  //db.Article.findOne({_id: req.params.id})
  //.populate("Note")
  //.then(function(dbArticle) {
  //  res.json(dbArticle);
  //})
  //.catch(function(err) {
  //  res.json(err);
  //});

//});

// Route for saving/updating an Article's associated Note
//app.post("/articles/:id", function(req, res) {
  // TODO
  // ====
  // save the new note that gets posted to the Notes collection
  // then find an article from the req.params.id
  // and update it's "note" property with the _id of the new note
  //db.Note.create(req.body)
  //.then(function(dbNote) {
  //  return db.Article.fineOneAndUpdate({_id: req.params.id}, {note: dbNote._id}, {new: true});
  //})
  //.then(function(dbArticle){
  //  res.json(dbArticle);
  //})
  //.catch(function(err){
  //  res.json(err);
  //})
//});

// Start the server
app.listen(PORT, function() {
  console.log("App running on port " + PORT + "!");
});
