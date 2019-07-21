// get article JSON info for each
$.getJSON("/articles", function(data) {
  
  for (var i = 0; i < data.length; i++) {
    // Display info on page
    $("#articles").append("<p data-id='" + data[i]._id + "'>" + data[i].title + "<br />" + data[i].link + "</p>");
  }
});
// button scrape function
$("#scrape-btn").on("click", function(){
  
})

// when use clicks "p" tag, empties notes & saves id
$(document).on("click", "p", function() {
  
  $("#notes").empty();

  var thisId = $(this).attr("data-id");

  // ajax call for Article
  $.ajax({
    method: "GET",
    url: "/articles/" + thisId
  })
  .then(function(data) {
    console.log(data);
      // title
      $("#notes").append("<h2>" + data.title + "</h2>");
      // new title input
      $("#notes").append("<input id='titleinput' name='title' >");
      // new note area
      $("#notes").append("<textarea id='bodyinput' name='body'></textarea>");
      // button to submit note & record article id for relation
      $("#notes").append("<button data-id='" + data._id + "' id='savenote'>Save Note</button>");

      // puts existing note titles in the related title area of an article
      if (data.note) {
        
        $("#titleinput").val(data.note.title);
        
        $("#bodyinput").val(data.note.body);
      }
    });
});

// savenote on-click
$(document).on("click", "#savenote", function() {
  // Grab the id associated with the article from the submit button
  var thisId = $(this).attr("data-id");

  // Run a POST request to change the note, using what's entered in the inputs
  $.ajax({
    method: "POST",
    url: "/articles/" + thisId,
    data: {
      // Value taken from title input
      title: $("#titleinput").val(),
      // Value taken from note textarea
      body: $("#bodyinput").val()
    }
  })
    // log data & empty notes
    .then(function(data) {
      
      console.log(data);
      
      $("#notes").empty();
    });

  // reset input values
  $("#titleinput").val("");
  $("#bodyinput").val("");
});
