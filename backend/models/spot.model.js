"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Spot extends Model {
        static associate(models) {
            Spot.belongsTo(models.Room, { foreignKey: "id_room" });
            Spot.belongsToMany(models.Reservation, {
                through: "ReservationSpots",
                foreignKey: "SpotId",
            });
        }
    }
    Spot.init(
        {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER,
            },
            name: DataTypes.STRING,
            id_room: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: {
                        tableName: "Rooms", // Nom du modèle référencé
                    },
                    key: "id", // Clé dans le modèle référencé
                },
            },
        },
        {
            sequelize,
            modelName: "Spot",
        },
    );
    return Spot;
};
