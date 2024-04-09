// 'use strict';
// /** @type {import('sequelize-cli').Migration} */
// module.exports = {
//   async up(queryInterface, Sequelize) {
//     await queryInterface.createTable('Reservations', {
//       id: {
//         allowNull: false,
//         autoIncrement: true,
//         primaryKey: true,
//         type: Sequelize.INTEGER
//       },
//       number_of_customers: {
//         type: Sequelize.INTEGER
//       },
//       date: {
//         type: Sequelize.DATE
//       },
//       name: {
//         type: Sequelize.STRING
//       },
//       note: {
//         type: Sequelize.STRING
//       },
//       status: {
//         type: Sequelize.INTEGER
//       },
//       created_at: {
//         allowNull: false,
//         type: Sequelize.DATE
//       },
//       updated_at: {
//         allowNull: false,
//         type: Sequelize.DATE
//       }
//     });
//   },
//   async down(queryInterface, Sequelize) {
//     await queryInterface.dropTable('Reservations');
//   }
// };
