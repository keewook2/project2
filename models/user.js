module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
      password: DataTypes.STRING,
      email: DataTypes.STRING
      //COMPANY COLUMN NEED TO BE ADDED
      // EX) company: DataTypes.array? and foreign key(id) of the company will be inside of the array.
    });
    return User;
  };
  