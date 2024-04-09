const { Sequelize, DataTypes } = require("sequelize");

// const sequelize = new Sequelize(`postgres://${process.env.DEV_DB_USER}:${process.env.DEV_DB_PASSWORD}@${process.env.DEV_DB_HOST}:${process.env.PORT_DB}/${process.env.DEV_DB_NAME}`);
const env = process.env.NODE_ENV || "development";
const config = require("./config")[env];
const userSeed = require("../seeders/user.seed");
const spotSeed = require("../seeders/spot.seed");
const roomSeed = require("../seeders/room.seed");
const reservationSeed = require("../seeders/reservation.seed");
const membershipSeed = require("../seeders/membership.seed");

const sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    {
        host: config.host,
        dialect: config.dialect,
        logging: console.log,
    },
);

try {
    sequelize.authenticate().then(() => {
        console.log("Connection has been established successfully.");
    });
} catch (error) {
    console.error("Unable to connect to the database:", error);
}

const User = require("../models/user.model")(sequelize, DataTypes);
const Membership = require("../models/membership.model")(sequelize, Sequelize);
const Room = require("../models/room.model")(sequelize, DataTypes);
const Spot = require("../models/spot.model")(sequelize, DataTypes);
const Reservation = require("../models/reservation.model")(
    sequelize,
    DataTypes,
);

Reservation.belongsToMany(Spot, { through: "ReservationSpots" });
Spot.belongsToMany(Reservation, { through: "ReservationSpots" });

sequelize
    .sync({ force: true })
    .then(async () => {
        await userSeed();
        await roomSeed();
        await reservationSeed();
        await spotSeed();
        await membershipSeed();
        console.log("Database and tables created!");
    })
    .catch((e) => {
        console.error("Database and tables creation failed!", e);
    });

module.exports = {
    sequelize,
    Sequelize,
    Membership,
    Reservation,
    Room,
    Spot,
    User,
};
