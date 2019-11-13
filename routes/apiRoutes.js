var db = require("../models");
var { User } = db
var passport = require("../config/passport");

module.exports = function(app) {
  // Get all examples
  app.get("/api/company", function(req, res) {
    // need to check post-api-routes in previous exercise on here
    db.Company.findAll(
      {
        // will be changed to db.User
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
    app.post("/signup", function(req, res) {
      var user = User.findOrCreate({
        where: {
          email: req.body.email,
          password: req.body.password
        }
      })
      res.send(user)
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

  app.post("/api/list/insert", function(req,res){
    db.Testuser.create({
      symbol: req.body.symbol
    }).then(function(TestuserData){
      res.json(TestuserData);
    });
  });

  app.get("/api/list", function(req,res){
    db.Testuser.findAll({}).then(function(TestuserData){
      res.json(TestuserData);
    })
  })
  
  app.delete("/api/list/:id", function(req,res){
    db.Testuser.destroy({ where: {id: req.params.id}}).then(function(db){
      res.json(db);
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

   
  app.post("/api/login", passport.authenticate("local"), function(req, res) {
    res.json("/members");

  });
//
  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/signup", function(req, res) {
    console.log(req.body);
    db.User.create({
      email: req.body.email,
      password: req.body.password
    }).then(function() {
      res.redirect(307, "/api/login");
    }).catch(function(err) {
      console.log(err);
      res.json(err);
      res.redirect(307, "/api/login");
      // res.status(422).json(err.errors[0].message);
    });
  });
//
  // Route for logging user out
  app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
  });
//
  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", function(req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    }
    else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });
};

