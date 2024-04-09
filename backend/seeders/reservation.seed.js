const db = require("../models");
const Reservation = db.Reservation;
const Spot = db.Spot;

async function seed() {
    const reservations = [
        {
            number_of_customers: 10,
            date: "2021-10-10",
            name: "1",
            note: "blabla",
            status: 1,
            id_user: 1,
        },
        {
            number_of_customers: 1111,
            date: "2022-10-11",
            name: "2",
            note: "blabla",
            status: 1,
            id_user: 1,
        },
        // Add more users as needed
    ];

    for (let reservation of reservations) {
        const r = await Reservation.create(reservation);
    }

    console.log("Database room reservation!");
}

module.exports = seed;
