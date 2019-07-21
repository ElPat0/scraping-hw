

var axios = require("axios");
var cheerio = require("cheerio");

module.exports = function (app) {

app.get("/scrape", function (req, res){

    axios.get("http://www.wsj.com/").then(function(response) {

    var $ = cheerio.load(response.data);

    $("article h2").each(function(i, element) {
        var result = {};

        result.title = $(this)
        .children("a")
        .text();
      result.link = $(this)
        .children("a")
        .attr("href");

        //new article
        db.Article.create(result)
        .then(function(dbArticle) {
          res.json(dbArticle);
            console.log(dbArticle);
        })
        .catch(function(err) {
            console.log(err);
        });
    }); 
  });
});
}