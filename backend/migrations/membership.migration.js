// 'use strict';
// /** @type {import('sequelize-cli').Migration} */
// module.exports = {
//   async up(queryInterface, Sequelize) {
//     await queryInterface.createTable('Memberships', {
//       id: {
//         allowNull: false,
//         autoIncrement: true,
//         primaryKey: true,
//         type: Sequelize.INTEGER
//       },
//       number_of_reservations: {
//         type: Sequelize.INTEGER
//       },
//       date_validity: {
//         type: Sequelize.DATE
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
//     await queryInterface.dropTable('Memberships');
//   }
// };
