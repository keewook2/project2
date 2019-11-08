module.exports = function(sequelize, DataTypes) {
  var Company = sequelize.define("Company", {
    price: DataTypes.DECIMAL,
    beta: DataTypes.STRING,
    volAvg: DataTypes.STRING,
    mktCap: DataTypes.STRING,
    lastDiv: DataTypes.STRING,
    range: DataTypes.STRING,
    changes: DataTypes.DECIMAL,
    changesPercentage: DataTypes.STRING,
    companyName: DataTypes.STRING,
    exchange: DataTypes.STRING,
    industry: DataTypes.STRING,
    website: DataTypes.STRING,
    description: DataTypes.TEXT,
    ceo: DataTypes.STRING,
    sector: DataTypes.STRING,
    image: DataTypes.TEXT
  });
  return Company;
};
