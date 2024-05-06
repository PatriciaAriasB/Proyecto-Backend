'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert ( 'categories',
    [
      { name: "Nike",
      createdAt: new Date(),
      updatedAt: new Date()
      },
      { name: "Adidas", 
      createdAt: new Date(),
      updatedAt: new Date()
       },
      { name: "Vans",
      createdAt: new Date(),
      updatedAt: new Date()
       },
      { name: "Converse",
      createdAt: new Date(),
      updatedAt: new Date()
       },
      { name: "Puma",
      createdAt: new Date(),
      updatedAt: new Date()
       },
      { name: "Reebok",
      createdAt: new Date(),
      updatedAt: new Date()
       },
      { name: "New Balance",
      createdAt: new Date(),
      updatedAt: new Date()
       },
      { name: "Under Armour",
      createdAt: new Date(),
      updatedAt: new Date()
       },
      { name: "Timberland",
      createdAt: new Date(),
      updatedAt: new Date()
       },
      { name: "Dr. Martens",
      createdAt: new Date(),
      updatedAt: new Date()
       }
    ]
  )},

  async down (queryInterface, Sequelize) {
 
  }
};
