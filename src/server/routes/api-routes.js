// Requiring our Todo model
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the emails
  app.get("/api/emails/", function(req, res) {
    db.Email.findAll({
      attributes: ['id', 'email']
    })
    .then(function(dbEmail) {
      res.json(dbEmail);
    });
  });

  // POST route for saving a new post
  app.post("/api/emails", function(req, res) {
    db.Email.create({
      email: req.body.email
    },{
      fields: ['email']
    })
    .then(function(dbEmail) {
      res.json(dbEmail);
    });
  });

  // DELETE route for deleting posts
  app.delete("/api/emails/delete/", function(req, res) {
    db.Email.destroy({
      where: {
        email: req.body.email
      }
    })
    .then(function(dbEmail) {
      console.log(req.params);
      res.json(dbEmail);
    });
  });

};
