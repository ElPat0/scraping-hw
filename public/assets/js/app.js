
//Scrape button executes scrape and then populates collapsible div's with article title & content
$("#scrape-btn").on(click, function() {
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
    //the function bit that scrapes stuff, maybe a reference to the server/mongoose thing
    //then the funciton bit that makes a new collapsible div & appends to container
    //then the finction bit that populates the new collapsible div with infr from the scrape
});