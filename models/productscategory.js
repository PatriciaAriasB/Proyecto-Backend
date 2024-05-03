'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProductsCategory extends Model {
   
    static associate(models) {
      // define association here
    }
  }
  ProductsCategory.init({
    ProductId: DataTypes.INTEGER,
    CategoryId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ProductsCategory',
  });
  return ProductsCategory;
};