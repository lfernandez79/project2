$(document).ready(function() {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  // Gets user e-mail and renders everything in front of @ to the welcome section of the page while rendering email in email section.
  $.get("/api/user_data").then(function(data) {
    var emailString = data.email;
    var emailSplitArry = emailString.split("@");
    $(".member-name").text(emailSplitArry[0]);
    $(".member-email").text(data.email);
  });
});
