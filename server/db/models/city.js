"use strict";

module.exports = function(sequelize, DataTypes) {
  const City = sequelize.define("City", {
    name: DataTypes.STRING
  });

  return City;
}