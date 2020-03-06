$(document).ready(function() {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(function(data) {
    $(".member-name").text(data.email);
  });

  $(".blogData").on("submit", function(event) {
    event.preventDefault();
    var newBlog = {
      city: $("#city-input")
        .val()
        .trim(),
      establishment: $("#establishment-input")
        .val()
        .trim(),
      itemsOrdered: $("#itemsOrdered-input")
        .val()
        .trim(),
      rating: $("#rating-input")
        .val()
        .trim(),
      story: $("#blog-input")
        .val()
        .trim()
    };

    // send the post request
    $.ajax("/api/blogs/", {
      type: "POST",
      data: newBlog
    }).then(function() {
      console.log("Created new blog");
      location.reload();
    });
  });
});
