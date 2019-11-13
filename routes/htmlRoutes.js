var db = require("../models");
var isAuthenticated = require("../config/middleware/isAuthenticated");
var path = require("path");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Company.findAll({}).then(function(dbExamples) {
      res.render("index", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });

  app.get("/company",function(req,res){
    db.Company.findAll({}).then(function(company){
      res.render("lists", {
        company: company
      })
    })
  })

  // Load company page and pass in an example by symbol
  app.get("/company/:symbol", function(req, res) {
    db.Company.findOne({ where: { symbol: req.params.symbol } }).then(function(company) {
      res.render("company", {
        company: company
      });
    });
  });
  
  app.get("/login",function(req,res){
    res.render("login");
  })
  
  app.get("/singup",function(req,res){
    res.render("singup");
  })

  app.get("/members", isAuthenticated, function(req, res) {
   // res.sendFile(path.join(__dirname, "../public/members.html"));
   res.render("members");
  });
  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    // redirect it to index 
    res.render("404");
  });

  
};
