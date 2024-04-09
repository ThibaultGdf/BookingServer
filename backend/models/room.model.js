"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Room extends Model {
        static associate(models) {
            Room.hasMany(models.Spot, { foreignKey: "id_room" });
        }
    }
    Room.init(
        {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER,
            },
            name: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: "Room",
        },
    );
    return Room;
};
