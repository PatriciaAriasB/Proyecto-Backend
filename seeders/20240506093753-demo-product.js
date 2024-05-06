'use strict';

// /** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert ( 'products',
    
    [
      {
        name: "Nike Air Max 90",
        price: 120.00,
        CategoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Adidas Superstar",
        price: 80.00,
        CategoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Vans Old Skool",
        price: 60.00,
        CategoryId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Converse Chuck Taylor",
        price: 50.00,
        CategoryId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Puma Suede Classic",
        price: 70.00,
        CategoryId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Reebok Classic Leather",
        price: 75.00,
        CategoryId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "New Balance 574",
        price: 80.00,
        CategoryId: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Under Armour Curry 6",
        price: 130.00,
        CategoryId: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Timberland 6-Inch Premium",
        price: 190.00,
        CategoryId: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Dr. Martens 1460",
        price: 150.00,
        CategoryId: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
    
  },

  async down (queryInterface, Sequelize) {
  
  }
};
