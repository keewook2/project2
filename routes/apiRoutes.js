var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/company", function(req, res) {
    // need to check post-api-routes in previous exercise on here
    db.Company.findAll(
      {
        include: [db.Financials]
      }).then(function(Company) {
      res.json(Company);
    });
  });

  app.get("/category/:category", function(req, res) {
    // 2. Add a join here to include the Author who wrote the Post
    db.Company.findOne({
      where: {
        category : req.params.category
      }
    }).then(function(dbget) {
      console.log(dbget);
      res.json(dbget);
    });
  });

  app.get("/api/companytest/:id", function(req, res) {
    // 2; Add a join to include all of the Author's Posts here
    db.Company.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  app.get("/api/financials", function(req,res){
    db.Financials.findAll({}).then(function(Financials){
      res.json(Financials);
    })
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

  app.post("/api/insert/financials", function(req, res){
    db.Financials.create({
      symbol: req.body.symbol,
      date: req.body.date,
      revenue: req.body.revenue,
      revenueGrowth: req.body.revenueGrowth,
      costOfRevenue: req.body.costOfRevenue,
      grossProfit: req.body.grossProfit,
      rndExpenses: req.body.rndExpenses,
      sgaExpense: req.body.sgaExpense,
      CompanyId: req.body.CompanyId
    }).then(function(Financials){
      res.json(Financials);
    })
  })


  // Delete an example by id
  app.delete("/api/company/:id", function(req, res) {
    db.Company.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(Company) {
      res.json(Company);
    });
  });
};

