"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Reservation extends Model {
        static associate(models) {
            Reservation.belongsToMany(models.Spot, {
                through: "ReservationSpots",
                foreignKey: "ReservationId",
            });
        }
    }
    Reservation.init(
        {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER,
            },
            number_of_customers: DataTypes.INTEGER,
            date: DataTypes.DATE,
            name: DataTypes.STRING,
            note: DataTypes.STRING,
            status: DataTypes.INTEGER,
            id_user: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: {
                        tableName: "Users", // Nom du modèle référencé
                    },
                    key: "id", // Clé dans le modèle référencé
                },
            },
        },
        {
            sequelize,
            modelName: "Reservation",
        },
    );
    return Reservation;
};
