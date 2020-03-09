let Blogs;

$(document).ready(function() {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  // Gets user e-mail and renders everything in front of @ to the welcome section of the page while rendering email in email section.
  $.get("/api/user_data").then(function(data) {
    var emailString = data.email;
    var emailSplitArry = emailString.split("@");
    $(".member-name").text(emailSplitArry[0]);
    $(".member-email").text(data.email);
    console.log("email string: ", emailString);
  });
  // This GET request retrieves data from api/blogs url param and set userBlogs as object key as blogObject and
  // the data returned is value. That way handlebars can use the object to render data on HTML screen.
  // $.get("/api/blogs").then(function(data) {
  //   Blogs = {
  //     Blogs: data
  //   };
  //   // $(".userBlogsTest").text(JSON.stringify(data));
  //   console.log("get API blogs data : ", Blogs);
  // });

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
