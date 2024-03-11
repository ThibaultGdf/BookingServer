'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Reservations', [{
      number_of_customers: 4,
      reservation_date: new Date(),
      reservation_name: "Thibault",
      reservation_note: "Un menu végétarien",
      reservation_status: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Reservations', null, {});
  }
};
