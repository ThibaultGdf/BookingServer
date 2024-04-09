const db = require("../models");
const User = db.User;
const bcrypt = require("bcryptjs");

async function seed() {
    const users = [
        {
            first_name: "John",
            last_name: "Doe",
            email: "john@example.com",
            role: 1,
            password: bcrypt.hashSync("123", 8),
        },
        {
            first_name: "Jane",
            last_name: "Doe",
            email: "jane@example.com",
            role: 1,
            password: bcrypt.hashSync("123", 8),
        },
        // Add more users as needed
    ];

    for (let user of users) {
        await User.create(user);
    }

    console.log("Database seeded!");
}

module.exports = seed;
