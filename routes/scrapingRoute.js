

var axios = require("axios");
var cheerio = require("cheerio");
var db = require("../models");
module.exports = function (app) {
  app.get("/scrape", function (req, res) {
    axios.get("http://www.wsj.com/").then(function (response) {
      var $ = cheerio.load(response.data);
      var array = [];
      $("article").each(function (i, element) {
        var result = {};
        result.imageUrl = $(element)
        .find()
        .text();
        result.title = $(element)
          .find(".WSJTheme--headline--19_2KfxG")
          .text();
        result.link = $(element)
          .find("a")
          .attr("href");
        array.push(result);
      });
      //new article
      db.Article.insertMany(array)
        .then(function (dbArticle) {
          res.json(dbArticle);
          console.log(dbArticle);
        })
        .catch(function (err) {
          console.log(err);
        });
    });
  });
}