

module.exports = function (app) {
  // Load index page & scrape wsj
  app.get("/", function (req, res) {
    axios.get("https://www.wsj.com").then(function(response) {

    var $ = cheerio.load(response.data);
    var results = [];
    
    $("article").each(function(i, element) {
  
      var title = $(element).children().text();
      var link = $(element).find("a").attr("href");
  
      results.push({
        title: title,
        link: link
      });
    });
  
    console.log(results);
  });
    res.render("index");
  });
 // Load Articles page
  //app.get("/articles", function (req, res) {

 // res.render("articles");
 // });

  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};
