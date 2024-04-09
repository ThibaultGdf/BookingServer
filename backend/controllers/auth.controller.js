const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const { User } = require("../config/db.js");

const SECRET_KEY = process.env.SECRET_KEY;

const signUp = async (req, res) => {
    const salt = await bcrypt.genSalt(10);

    const { firstname, lastname, email } = req.body;
    const user_password = req.body.password;

    const hashedPassword = await bcrypt.hash(user_password, salt);

    const user = {
        firstname: firstname,
        lastname: lastname,
        email: email,
        user_role: "client",
        user_password: hashedPassword,
    };

    if (!user) {
        return res.status(422).json({ message: "Le User n'existe pas" });
    }

    try {
        await User.create(user);
        res.json({ user });
    } catch (error) {
        console.log(error);
    }
};

const signIn = async (req, res) => {
    const user = await User.findOne({
        where: {
            email: req.body.email,
        },
    });

    if (!user) {
        return res.status(400).json({ message: "Nom d'utilisateur incorrect" });
    }

    const validPassword = await bcrypt.compare(
        req.body.password,
        user.user_password,
    );
    if (!validPassword) {
        res.status(400).json({ message: "Mot de passe incorrect" });
    }

    const payload = {
        id: user.id,
        email: user.email,
        role: user.user_role,
    };

    const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "24h" });

    res.status(201).json({ token: token });
};

module.exports = { signUp, signIn };
