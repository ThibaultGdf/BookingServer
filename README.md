# PROJET : BookingServer

## Initialisation du serveur

☑️ Créer un dossier projet.

```bash
mkdir BookingServer
```

☑️ Créer un dossier backend à l'intérieur du dossier projet.

```bash
cd BookingServer
mkdir backend
```

☑️ Se déplacer dans le dossier backend à l'aide du terminal et installer express.

```bash
cd backend
npm install express-generator
```

☑️ Importer le fichier app.js ainsi que d'autres dossiers.

```bash
npx express-generator
```

☑️ Supprimer le dossier public et le dossier views.

☑️ Installer les dépendances nécessaires :

```bash
npm install sequelize cors dotenv jsonwebtoken bcryptjs
```

☑️ Automatiser l'actualisation du serveur dans le fichier package.json.

```javascript
"start": "node --watch ./bin/www"
```

☑️ Créer le fichier .gitignore à la racine du projet et ajouter node_modules à l'intérieur.

☑️ Allumer le serveur sur le port 3000.

```bash
npm run start
```

## Implémentation des routes

☑️ Créer les fichers dans le dossier routes.

```bash
cd routes
touch reservations.route.js
touch rooms.route.js
touch spots.route.js
```

☑️ Renommer le fichier index.js et le fichier user.js.

```javascript
index.route.js
users.route.js
```

☑️ Déclarer les routers dans /routes/index.js.

```javascript
const reservationRouter = require("./reservations.route");
const roomRouter = require("./rooms.route");
const spotRouter = require("./spots.route");
const userRouter = require("./users.route");
```

☑️ Créer les routes principales dans /routes/index.js.

```javascript
router.use("/reservations", reservationRouter);
router.use("/rooms", roomRouter);
router.use("/spots", spotRouter);
router.use("/users", userRouter);
```

## Ajouter les routes dans les fichiers

☑️ ROUTES/RESERVATIONS
```javascript
var express = require('express');
var router = express.Router();

/* GET */
router.get('/', function(req, res, next) {
    res.json({ message: 'Vous êtes sur la route GET des reservations' });
});

/* POST */
router.post('/', function(req, res, next) {
    res.json({ message: 'Vous êtes sur la route POST des reservations' });
});

  /* PUT */
router.put('/', function(req, res, next) {
    res.json({ message: 'Vous êtes sur la route PUT des reservations' });
});

  /* DELETE */
router.delete('/', function(req, res, next) {
    res.json({ message: 'Vous êtes sur la route DELETE des reservations' });
});

module.exports = router;
```


☑️ ROUTES/ROOMS

```javascript
var express = require('express');
var router = express.Router();

/* GET */
router.get('/', function(req, res, next) {
    res.json({ message: 'Vous êtes sur la route GET des rooms' });
});

/* POST */
router.post('/', function(req, res, next) {
    res.json({ message: 'Vous êtes sur la route POST des rooms' });
});

  /* PUT */
router.put('/', function(req, res, next) {
    res.json({ message: 'Vous êtes sur la route PUT des rooms' });
});

  /* DELETE */
router.delete('/', function(req, res, next) {
    res.json({ message: 'Vous êtes sur la route DELETE des rooms' });
});

module.exports = router;
```


☑️ ROUTES/SPOTS

```javascript
var express = require('express');
var router = express.Router();

/* GET */
router.get('/', function(req, res, next) {
    res.json({ message: 'Vous êtes sur la route GET des spots' });
});

/* POST */
router.post('/', function(req, res, next) {
    res.json({ message: 'Vous êtes sur la route POST des spots' });
});

  /* PUT */
router.put('/', function(req, res, next) {
    res.json({ message: 'Vous êtes sur la route PUT des spots' });
});

  /* DELETE */
router.delete('/', function(req, res, next) {
    res.json({ message: 'Vous êtes sur la route DELETE des spots' });
});

module.exports = router;
```


☑️ ROUTES/USERS

```javascript
var express = require('express');
var router = express.Router();

/* GET */
router.get('/', function(req, res, next) {
    res.json({ message: 'Vous êtes sur la route GET des users' });
});

/* POST */
router.post('/', function(req, res, next) {
    res.json({ message: 'Vous êtes sur la route POST des users' });
});

  /* PUT */
router.put('/', function(req, res, next) {
    res.json({ message: 'Vous êtes sur la route PUT des users' });
});

  /* DELETE */
router.delete('/', function(req, res, next) {
    res.json({ message: 'Vous êtes sur la route DELETE des users' });
});

module.exports = router;
```

☑️ Créer un environement sur Postman.

1. New
2. Environment
3. Donner un nom à l'environment
4. Créer les variables à l'intérieur.

```bash
Exemple: BaseUrlApi / BaseUrlAuth / access_token
```

☑️ Créer et envoyer les requêtes sur postman avec les variables d'environement.

```bash
{{BaseUrlApi}}/reservations
{{BaseUrlApi}}/rooms
{{BaseUrlApi}}/spots
{{BaseUrlApi}}/users
```

## Créer la base de données

☑️ Installer PostgreSQL.

```bash
brew install postgresql@15
```

☑️ Installer et initialiser Sequelize.

```bash
npm install --save sequelize
sequelize init
```

☑️ Installer Postgres.

```bash
npm install --save pg pg-hstore
```

☑️ Modifier le fichier config.js

```javascript
{
  "development": {
    "username": "thibaultgodefroy",
    "password": "password",
    "database": "bookingserver_development",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "test": {
    "username": "thibaultgodefroy",
    "password": "password",
    "database": "bookingserver_test",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "production": {
    "username": "thibaultgodefroy",
    "password": "password",
    "database": "bookingserver_production",
    "host": "127.0.0.1",
    "dialect": "postgres"
  }
}
```

☑️ Créer un fichier db.js à la racine du projet.

```bash
touch db.js
```


☑️ Créer notre base de donnée.

```bash
npx sequelize-cli db:create
```

☑️ Faire la connexion avec la base de donnée.

```javascript
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize("postgres://thibaultgodefroy:password@localhost:5432/bookingserver_development");

try {
  sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
  });
  
} catch (error) {
  console.error('Unable to connect to the database:', error);
}
```

☑️ Aller sur TablePlus et tester la connexion de notre serveur en ajoutant les informations indiqués dans le fichier /config/config.json.

## Créer les models et migrations

☑️ Créer le model Reservation

```bash
npx sequelize-cli model:generate --name Reservation --attributes number_of_customers:integer,reservation_date:date,reservation_name:string,reservation_note:string,reservation_status:integer
```

☑️ Créer le model Room

```bash
npx sequelize-cli model:generate --name Room --attributes room_name:string
```

☑️ Créer le model Spot

```bash
npx sequelize-cli model:generate --name Spot --attributes spot_name:string
```

☑️ Créer le model User

```bash
npx sequelize model:generate --name User --attributes firstName:string,lastName:string,email:string,user_role:string,user_password:string
```

☑️ Migrer les models dans la base de donnée

```bash
npx sequelize-cli db:migrate
```

☑️ Actualiser la base de donnée sur TablePlus

```bash
Commant + R
```

## Création des Seeders

### ☑️ User
```bash
npx sequelize-cli seed:generate --name user
```

### ☑️ Reservation
```bash
npx sequelize-cli seed:generate --name reservation
```

### ☑️ Spot
```bash
npx sequelize-cli seed:generate --name spot
```

### ☑️ Room
```bash
npx sequelize-cli seed:generate --name room
```

☑️ Ajouter des données fictives dans les seeders.

### Reservation
```javascript
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Reservations', [{
      number_of_customers: 4,
      reservation_date: new Date(),
      reservation_name: "Alex",
      reservation_note: "Un menu végétarien",
      reservation_status: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Reservations', null, {});
  }
};
```

### Room
```javascript
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Rooms', [{
      room_name: "Salle 1",
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Rooms', null, {});
  }
};
```

### Spot
```javascript
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Spots', [{
      spot_name: "Le Bistrot de la Gare",
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Spots', null, {});
  }
};
```

### User
```javascript
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [{
      firstName: "Alex",
      lastName: "Zerah",
      email: "pro@alexzerah.com",
      user_role: "client",
      user_password: "password en attente de hashage",
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
```

☑️ Envoyer les seeders dans la base de donnée.

```bash
npx sequelize-cli db:seed:all
```

### Lier les routes à la base de donnée

☑️ Ajouter sequelize et DataTypes à nos routers

```javascript
const Reservation = require("./models/reservation")(sequelize, DataTypes);
const Room = require("./models/room")(sequelize, DataTypes);
const Spot = require("./models/spot")(sequelize, DataTypes);
const User = require("./models/user")(sequelize, DataTypes);
```



☑️ Modifier les routes pour récupérer toutes les données.

```javascript
router.get('/', async function(req, res, next) {

  try {
    const reservations = await Reservation.findAll()
    console.log(reservations);
    res.json({message:reservations});
  } catch(e) {
    res.json(e);
  }
});
```


☑️ Ajouter dans le fichier db.js la liaison des models à la base de donnée.
```javascript
const { Sequelize, DataTypes } = require('sequelize');

const Reservation = require("./models/reservation")(sequelize, DataTypes);
const Room = require("./models/room")(sequelize, DataTypes);
const Spot = require("./models/spot")(sequelize, DataTypes);
const User = require("./models/user")(sequelize, DataTypes);

module.exports = { Reservation, Room, Spot, User };
```

## Ajouter les controllers

```bash
mkdir controllers
cd controllers
```

```bash
touch reservation.controller.js
```

```bash
touch room.controller.js
```

```bash
touch spot.controller.js
```

```bash
touch user.controller.js
```

## Déplacer les fonctions de routes dans les controllers

☑️ Modifier le fichier user.route.js

```javascript
var userController = require('../controllers/user.controller.js')

/* GET */
router.get('/', userController.get);
```

☑️ Ajouter la fonction pour obtenir tous les users dans le fichier room.controller.js

```javascript
const { User } = require('../config/db.js');

const get = async function(req, res, next) {
    try {
        const users = await User.findAll()
        console.log(users);
        res.status(200).json({ users })
    } catch(error) {
        res.json(error);
    }
};

module.exports = { get };
```


☑️ Modifier le fichier reservation.route.js

```javascript
var reservationController = require('../controllers/reservation.controller.js')

/* GET */
router.get('/', reservationController.get);
```


☑️ Ajouter la fonction pour obtenir toutes les reservations dans le fichier reservation.controller.js 
```javascript
const { Reservation } = require('../config/db.js');

const get = async function(req, res, next) {
    try {
        const reservations = await Reservation.findAll()
        console.log(reservations);
        res.status(200).json({ reservations })
    } catch(error) {
        res.json(error);
    }
};

module.exports = { get };
```

☑️ Modifier le fichier room.route.js

```javascript
var roomController = require('../controllers/room.controller.js')

/* GET */
router.get('/', roomController.get);
```

☑️ Ajouter la fonction pour obtenir toutes les rooms dans le fichier room.controller.js.

```javascript
const { Room } = require('../config/db.js');

const get = async function(req, res, next) {
    try {
        const rooms = await Room.findAll()
        console.log(rooms);
        res.status(200).json({ rooms })
    } catch(error) {
        res.json(error);
    }
};

module.exports = { get };
```

☑️ Modifier le fichier spot.route.js.

```javascript
var spotController = require('../controllers/spot.controller.js')

/* GET */
router.get('/', spotController.get);
```

☑️ Ajouter la fonction pour obtenir tous les spots dans le fichier spot.controller.js.

```javascript
const { Spot } = require('../config/db.js');

const get = async function(req, res, next) {
    try {
        const spots = await Spot.findAll()
        console.log(spots);
        res.status(200).json({ spots })
    } catch(error) {
        res.json(error);
    }
};

module.exports = { get };
```

## Authentification

☑️ Créer un fichier auth dans le dossier routes.
```bash
cd routes
touch auth.route.js
```

☑️ Importer le router et exporter le module.

```bash
const express = require("express");

const router = express.Router();

module.exports = router;
```

☑️ Installer la dépendance jsonwebtoken.

```bash
npm install jsonwebtoken
```

☑️ Importer jwt dans le fichier auth.route.js.

```bash
const jwt = require('jsonwebtoken');
```

☑️ Installer la dépendance bcrypt pour chiffrer le mot de passe.

```bash
$ npm install bcrypt
```

☑️ Importer bcrypt dans le fichier auth.route.js.

```bash
const bcrypt = require('bcrypt');
```

☑️ Créer les routes dans POSTMAN.

```bash
POST /auth/signup
POST /auth/signin
```

☑️ Créer le router auth dans le fichier app.js.

```javascript
app.use('/auth', authRouter);
```

☑️ Renommer la route du router index dans le fichier app.js.

```javascript
app.use('/api', indexRouter);
```

## Sign Up

☑️ Ajouter la fonction SignUp avec les données reçu de Postman.

```javascript
router.post('/signup', (req, res) => {

const user = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    user_role: req.body.role,
    user_password: req.body.password,
};
  res.json({message: utilisateur créé})
})
```

## Hasher le mot de passe

☑️ Créer les variables pour chiffrer le mot de passe dans la fonction SignUp

```javascript
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
```


☑️ Ajouter l'utilisateur dans la base de donnée avec async/await

```javascript
router.post('/signup', async (req, res) => {

    const salt = await bcrypt.genSalt(10);
    const { firstName, lastName, email } = req.body
    const user_password = req.body.password
    const hashedPassword = await bcrypt.hash(user_password, salt);

    const user = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        user_role: "customer",
        user_password: hashedPassword,
    };
try {
    await User.create(user);
    res.json({user})
} catch(error) {
    console.log(error)
};
});
```

☑️ Sécuriser les champs envoyés dans la base de donnée pour qu'ils ne soient pas vide.
```javascript
EN ATTENTE DU CODE
```

## Sign In

☑️ Créer la route pour se connecter sur Postman.

☑️ Créer la fonction SignUp dans mon controller.
```javascript
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const { User } = require('../config/db.js');

const signUp = async (req, res) => {
    const salt = await bcrypt.genSalt(10);

    const { firstName, lastName, email } = req.body
    const user_password = req.body.password

    const hashedPassword = await bcrypt.hash(user_password, salt);
    

    const user = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        user_role: "customer",
        user_password: hashedPassword,
    };

    if (!user) {
        return res.status(422).json ({ message: "Le User n'existe pas"})
    }

    try {
        await User.create(user);
        res.json({user})
    } catch(error) {
        console.log(error)
    };
};

module.exports = { signUp };
```
☑️ Créer la route SignIn dans mon router.
```javascript
var authController = require('../controllers/auth.controller.js')

router.post('/signup', authController.signUp);
```

☑️ Créer la fonction SignIn dans mon controller.

☑️ Récupérer l'utilisateur correspondant à l'adresse email envoyée.

```javascript
const signIn = async (req, res) => {
    const user = await User.findOne({
        where: {
            email: req.body.email
        }
    })
}
```

☑️ Vérifier que l'utilisateur contient bien une adresse email.
```javascript
if (!user) {
        return res.status(400).json({ message: "Nom d'utilisateur ou mot de passe incorrect"});
    }
```

☑️ Comparer le mot de passe de postman avec le mot de passe dans ma base de donnée.
```javascript
    const validPassword = await bcrypt.compare(req.body.password, user.user_password);
    if (!validPassword) {
        res.status(400).json({ message: "Mot de passe incorrect"})
    }
```

☑️ Création du payload qui va chiffrer les données dans le token.
```javascript
const payload = {
        id: user.id,
        email: user.email,
        role: user.user_role
    }
```

☑️ Définir une SECRET_KEY.
```javascript
const SECRET_KEY = 'secretkey23456';
```

☑️ Créer le token avec les informations du payload, la clée secrète et le temps d'expiration du token.
```javascript
const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '1h' });
    res.json({token: token});
```

☑️ /controllers/auth.controller.js
```javascript
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const { User } = require('../config/db.js');

const SECRET_KEY = 'secretkey23456';

const signUp = async (req, res) => {
    const salt = await bcrypt.genSalt(10);

    const { firstName, lastName, email } = req.body
    const user_password = req.body.password

    const hashedPassword = await bcrypt.hash(user_password, salt);
    

    const user = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        user_role: "client",
        user_password: hashedPassword,
    };

    if (!user) {
        return res.status(422).json ({ message: "Le User n'existe pas"})
    }

    try {
        await User.create(user);
        res.json({user})
    } catch(error) {
        console.log(error)
    };
};

const signIn = async (req, res) => {
    const user = await User.findOne({
        where: {
            email: req.body.email
        }
    });

    if (!user) {
        return res.status(400).json({ message: "Nom d'utilisateur incorrect"});
    }

    const validPassword = await bcrypt.compare(req.body.password, user.user_password);
    if (!validPassword) {
        res.status(400).json({ message: "Mot de passe incorrect"})
    }

    const payload = {
        id: user.id,
        email: user.email,
        role: user.user_role
    }

    const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '1h' });

    res.status(201).json({token: token});
};

module.exports = { signUp, signIn };
```
