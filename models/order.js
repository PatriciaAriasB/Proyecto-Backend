'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
 
    static associate(models){
      Product.belongsToMany(models.Order,{
        through:models.OrderProduct
      })
    }
  }
  Order.init({
    date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};