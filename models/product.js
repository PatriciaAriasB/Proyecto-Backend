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
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Por favor introduce un producto",
        },
      },
    },
    price: DataTypes.DECIMAL,

  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};