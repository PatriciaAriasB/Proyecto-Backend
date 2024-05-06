'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {

    static associate(models)  {
      Product.belongsToMany(models.Category,{
        through:models.ProductsCategory
      })
    }
  }

  Product.init({
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    CategoryId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};