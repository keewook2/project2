var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/company", function(req, res) {
    db.Company.findAll({}).then(function(Company) {
      res.json(Company);
    });
  });

  app.get("/api/company/:symbol", function(req, res) {
    // 2; Add a join to include all of the Author's Posts here
    db.Company.findOne({
      where: {
        symbol: req.params.symbol
      }
    }).then(function(db) {
      res.json(db);
    });
  });

  // Create a new Company
  app.post("/api/insert", function(req, res) {
    db.Company.create({
      symbol: req.body.symbol,
      price:  req.body.price,
      beta:   req.body.beta,
      volAvg: req.body.volAvg,
      mktCap: req.body.mktCap,
      lastDiv: req.body.lastDiv,
      range: req.body.range,
      changes: req.body.changes,
      changesPercentage: req.body.changesPercentage,
      companyName: req.body.companyName,
      exchange: req.body.exchange,
      industry: req.body.industry,
      website: req.body.website,
      description: req.body.description,
      ceo: req.body.ceo,
      sector: req.body.sector,
      image: req.body.image
    }).then(function(Company) {
      res.json(Company);
    });
  });

  // Delete an example by id
  app.delete("/api/conmpany/:id", function(req, res) {
    db.Company.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json(Company);
    });
  });
};

