var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/all/conmpany", function(req, res) {
    db.Company.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  app.get("/id/:id", function(req, res) {
    // 2. Add a join here to include the Author who wrote the Post
    db.Company.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbget) {
      //console.log(dbget);
      res.json(dbget);
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
  //
  app.post("/insertUser", function(req, res) {
    db.User.create({
      price:    req.body.price,
      name:     req.body.name,
      password: req.body.password, 
      email:    req.body.email

    }).then(function(Users) {
     // res.JSON.parse(Users);
      res.json(Users);
      
    });
  });
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

