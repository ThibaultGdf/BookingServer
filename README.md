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

☑️ Créer et envoyer les requêtes sur postman.


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

const sequelize = new Sequelize("postgres://thibaultgodefroy:password@localhost:3000/postgres");

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
```

