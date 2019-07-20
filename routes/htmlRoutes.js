

module.exports = function (app) {
  // Load index page
  app.get("/", function (req, res) {
    //let you = req.user;

    res.render("index", { user: you });
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
