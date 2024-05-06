'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
 
    static associate(models){
      Order.belongsToMany(models.Product,{
        through:models.OrderProduct
      })
    }
  }
  Order.init({
    UserId: DataTypes.INTEGER,
    date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};