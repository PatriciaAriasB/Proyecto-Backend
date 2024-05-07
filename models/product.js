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
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Por favor introduce un precio",
        },
      },
    },

  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};