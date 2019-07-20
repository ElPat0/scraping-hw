//re-requiring axios
//var axios = require("axios");
//Scrape button executes scrape and then populates collapsible div's with article title & content
$("#scrape-btn").on("click", function() {
    //The bit that scrapes
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
    
});