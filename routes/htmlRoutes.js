

module.exports = function (app) {
  
  
  app.get("/scrape", function (req, res){
    axios.get("https://www.wsj.com").then(function(response) {

  var $ = cheerio.load(response.data);
  
  console.log("wsj");
  console.log(response.data);
    res.json(response.data);
  });
});

  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};
