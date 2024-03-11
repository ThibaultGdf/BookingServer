const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize("postgres://thibaultgodefroy:password@localhost:3000/postgres");

try {
sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
});

} catch (error) {
    console.error('Unable to connect to the database:', error);
}

const Reservation = require("./models/reservation")(sequelize, DataTypes);
const Room = require("./models/room")(sequelize, DataTypes);
const Spot = require("./models/spot")(sequelize, DataTypes);
const User = require("./models/user")(sequelize, DataTypes);

module.exports = { Reservation, Room, Spot, User };