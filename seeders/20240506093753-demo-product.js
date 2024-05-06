'use strict';

// /** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert ( 'products',
    
    [
      {
        name: "Nike Air Max 90",
        price: 120.00,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Adidas Superstar",
        price: 80.00,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Vans Old Skool",
        price: 60.00,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Converse Chuck Taylor",
        price: 50.00,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Puma Suede Classic",
        price: 70.00,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Reebok Classic Leather",
        price: 75.00,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "New Balance 574",
        price: 80.00,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Under Armour Curry 6",
        price: 130.00,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Timberland 6-Inch Premium",
        price: 190.00,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Dr. Martens 1460",
        price: 150.00,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
    
  },

  async down (queryInterface, Sequelize) {
  
  }
};
