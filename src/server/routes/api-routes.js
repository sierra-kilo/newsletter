// Requiring our Todo model
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the emails
  app.get("/api/emails/", function(req, res) {
    db.Email.findAll({
      attributes: ['id', 'email', 'active']
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

};
