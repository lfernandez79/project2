var db = require("../models");

module.exports = function(app) {
  app.get("/api/blogs/:id", function(req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.User
    db.Blog.findOne({
      where: {
        id: req.params.id
      },
      include: [db.User, db.Blogs]
    }).then(function(dbUser) {
      res.json(dbUser);
    });
  });
  // Get all
  app.get("/api/blogs/", function(req, res) {
    // Here we add an "include" property to our options in our findOne query
    db.Blog.findAll({
      where: {
        UserId: req.user.id
      },
      include: [db.User]
    }).then(function(dbUser) {
      res.json(dbUser);
    });
  });

  // POST route for saving a new post
  app.post("/api/blogs/", function(req, res) {
    var test = { ...req.body, UserId: req.user.id };
    console.log(test);
    db.Blog.create(test).then(function(dbBlog) {
      res.json(dbBlog);
    });
  });

  // DELETE route for deleting posts
  app.delete("/api/blogs/:id", function(req, res) {
    db.Blog.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbBlog) {
      res.json(dbBlog);
    });
  });
};
