var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/conmpany", function(req, res) {
    db.Company.findAll({}).then(function(dbExamples) {
      res.json(Company);
    });
  });

  app.get("/api/conmpany/:name", function(req, res) {
    // 2; Add a join to include all of the Author's Posts here
    db.conmpany.findOne({
      where: {
        id: req.params.name
      }
    }).then(function(dbExample) {
      res.json(db);
    });
  });

  // Create a new Comapany
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

