'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Shoes extends Model {

    static associate(models) {
      // define association here
    }
  }
  Shoes.init({
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'Shoes',
  });
  return Shoes;
};