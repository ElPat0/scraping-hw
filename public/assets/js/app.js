//re-requiring axios
//var axios = require("axios");
//Scrape button executes scrape and then populates collapsible div's with article title & content
$("#scrape-btn").on("click", function() {
    //The bit that scrapes
$.ajax({
  url: "/scrape",
  
}).done(function(results) {
  console.log(results);
  $( this ).addClass( "done" );
});
})
