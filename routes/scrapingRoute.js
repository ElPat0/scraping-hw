

app.get("/scrape", function (req, res){
    axios.get("https://www.wsj.com").then(function(response) {
  
  console.log("wsj");
  console.log(response);
    res.json(response);
  });
});