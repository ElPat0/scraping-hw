module.exports = function (app) {

app.get("/scrape", function (req, res){
    axios.get("https://www.wsj.com").then(function(response) {
  
    res.json(response);
    console.log(response);
  });
});
}