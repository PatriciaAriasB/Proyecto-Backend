'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert ( 'ProductsCategories',
    [
      {
      ProductId: 1,
      CategoryId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      ProductId: 2,
      CategoryId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      ProductId: 3,
      CategoryId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      ProductId: 4,
      CategoryId: 4,
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      ProductId: 5,
      CategoryId: 5,
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      ProductId: 6,
      CategoryId: 6,
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      ProductId: 7,
      CategoryId: 7,
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      ProductId: 8,
      CategoryId: 8,
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      ProductId: 9,
      CategoryId: 9,
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      ProductId: 10,
      CategoryId: 10,
      createdAt: new Date(),
      updatedAt: new Date()
      },
      
    ]
  )},

  async down (queryInterface, Sequelize) {
 
  }
};
