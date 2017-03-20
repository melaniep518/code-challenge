"use strict";

module.exports = function(sequelize, DataTypes) {
  const Person = sequelize.define("Person", {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate(models) {
        Person.belongsTo(models.City, {foreignKey: "favoriteCity"})
      }
    }
  });

  return Person;
}