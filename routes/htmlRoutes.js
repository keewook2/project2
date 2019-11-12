var db = require("../models");

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
  
  app.get("/user",function(req,res){
    res.render("signup");
  })
  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    // redirect it to index 
    res.render("404");
  });
};
