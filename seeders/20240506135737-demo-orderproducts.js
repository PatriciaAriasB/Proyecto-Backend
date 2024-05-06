'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert ( 'OrderProducts',
    [
      {
      ProductId: 6,
      OrderId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      ProductId: 5,
      OrderId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      ProductId: 17,
      OrderId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      ProductId: 4,
      OrderId: 4,
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      ProductId: 5,
      OrderId: 5,
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      ProductId: 6,
      OrderId: 6,
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      ProductId: 7,
      OrderId: 7,
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      ProductId: 8,
      OrderId: 8,
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      ProductId: 9,
      OrderId: 9,
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      ProductId: 10,
      OrderId: 10,
      createdAt: new Date(),
      updatedAt: new Date()
      },
      
    ]
  )},

  async down (queryInterface, Sequelize) {
 
  }
};
