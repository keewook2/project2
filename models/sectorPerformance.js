module.exports = function(sequelize,DataTYpes){
    var SectorPerformance = sequelize.define("sectorPerformance",{
        sector: DataTypes.STRING,
        changesPercentage: DataTypes.STRING
    });
    return SectorPerformance;
}