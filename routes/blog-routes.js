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
      include: [db.User]
    }).then(function(dbUser) {
      res.json(dbUser);
    });
  });

  // POST route for saving a new post
  app.post("/api/blogs/", function(req, res) {
    db.Blog.create({...req.body, UserId: req.user.id}).then(function(dbBlog) {
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
