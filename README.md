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

const SECRET_KEY = process.env.SECRET_KEY;

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

## Securiser les données avec DOTENV

☑️ Installer la dépendance dotenv
```bash
npm install dotenv
```

☑️ Créer le fichier .env dans le dossier backend
```bash
touch .env
```

☑️ Remplir le fichier .env
```bash
USER=thibaultgodefroy
HOST=localhost
DATABASE=bookingserver_development
PASSWORD=password
PORT=3000
SECRET_KEY=secretkey23456
```

☑️ Configurer dotenv pour pouvoir utiliser process.env.
```javascript
require('dotenv').config();
```

☑️ Modifier la connexion avec ma base de donnée dans le fichier config/db.js.
```javascript
AVANT
const sequelize = new Sequelize("postgres://thibaultgodefroy:password@localhost:5432/bookingserver_development");

APRÈS
const sequelize = new Sequelize(`postgres://${process.env.USER}:${process.env.PASSWORD}@${process.env.HOST}:${process.env.PORT_DB}/${process.env.DATABASE}`);
```

☑️ Ajouter le fichier .env dans le .gitignore.

☑️ Ajouter access_token en environement sur postman.

☑️ Créer un dossier middlewares pour protéger nos routes.

☑️ Ajouter le fichier authenticate.middleware.js à l'interieur qui va vérifier si le token est valide.

```javascrpit
const jwt = require('jsonwebtoken')

const verifyJwt = (req, res, next) => {
    const SECRET_KEY = process.env.SECRET_KEY
    const token = req.header('Authorization');

    if(!token) {
        return res.status(401).json({ auth: false, message: 'No token provided.' });
    }

    try {
        const decoded = jwt.verify(token, SECRET_KEY);
        console.log(decoded);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(400).json({ auth: false, message: 'Invalid token.' });
    }
};

module.exports = { verifyJwt };
```

☑️ Ajouter la vérification du token dans le router /api dans le fichier app.js.
```javascript
// AVANT
app.use('/api', indexRouter);

// APRES
app.use('/api', authenticate.verifyJwt, indexRouter);
```

☑️ Supprimer les éléments ci-dessous dans le fichier app.js.
```javascript
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
```

### Implémenter la logique des routes

☑️ Réservation : GET ONE

1. Ajouter la route getOne dans ./routes/reservation.route.js.
```javascript
router.get('/:id', reservationController.getOne);
```

2. Modifier l'intérieur de la fonction dans notre ./reservation.controller.js.
```javascript
const getOne = async function (req, res) {
    try {
        const reservation = await Reservation.findByPk(req.params.id);
        res.json({ reservation });
    } catch (error) {
        res.status(500).json({message: 'Erreur serveur lors de la récupération d\'une réservation'});
    }
};
```
☑️ Réservation : GET ALL

1. Ajouter la route getAll dans ./routes/reservation.route.js.

```javascript
router.get('/', reservationController.getAll);
```

2. Modifier l'intérieur de la fonction dans notre ./reservation.controller.js.

```javascript
const getAll = async function(_, res) {
    try {
        const reservations = await Reservation.findAll()
        res.status(200).json({ reservations })
    } catch(error) {
        res.status(500).json({message: 'Erreur serveur lors de la récupération des réservation'});
    }
};
```


☑️ Réservation : POST

1. Ajouter la route post dans ./routes/reservation.route.js.

```javascript
router.post('/', reservationController.post);
```

2. Modifier l'intérieur de la fonction dans notre ./reservation.controller.js.

```javascript
const post = async function(req, res) {
    try {

// Récupérer les informations dans postman
const { number_of_customers, reservation_date, reservation_name, reservation_note, reservation_status } = req.body

       // Créer la réservation avec les champs de postman
        const reservation = await Reservation.create({
            number_of_customers,
            reservation_date, 
            reservation_name, 
            reservation_note, 
            reservation_status
        });
    return res.status(200).json({reservation})

} catch(error) {
    return res.status(500).json({message: 'Erreur serveur lors de la création d\'une réservation'})
}
    };
```

☑️ Réservation : PUT 
1. Ajouter la route put dans ./routes/reservation.route.js.

```javascript
router.put('/:id', reservationController.put);
```

2. Modifier l'intérieur de la fonction dans notre ./reservation.controller.js.

```javascrpit
const put = async function(req, res) {

    try {
    // Trouver une reservation avec son ID
const id = req.params.id

// Récupérer les informations dans postman
const { number_of_customers, reservation_date, reservation_name, reservation_note, reservation_status } = req.body

// Chercher la réservation avec l'id
const reservation = await Reservation.findByPk(id);

// Vérifier qu'il y ai bien une réservation
if (!reservation) {
    return res.status(404).json({ message: 'La réservation n\'existe pas'});
}

// Modifier l'ancienne réservation par la nouvelle
reservation.number_of_customers = number_of_customers
reservation.reservation_date = reservation_date
reservation.reservation_name = reservation_name
reservation.reservation_note = reservation_note
reservation.reservation_status = reservation_status

// Sauvegarder la nouvelle réservation
await reservation.save()

        res.status(200).json({ message: 'La réservation a bien été mise à jour !' });
    
        } catch(error) {
        res.status(500).json({message: 'Erreur serveur lors du traîtement des données'});
        }
};
```

☑️ Réservation : DELETE 
1. Ajouter la route delete dans ./routes/reservation.route.js. (Attention DELETE n'est pas autorisé ! Utilisez Destroy)

```javascript
router.delete('/:id', reservationController.destroy);
```

2. Modifier l'intérieur de la fonction dans notre ./reservation.controller.js.

```javascrpit
const destroy = async function(req, res) {
    try {
        // Récupération de l'id
        const id = req.params.id

        // Trouver la réservation avec l'id
        const reservation = await Reservation.findByPk(id);

        // Vérifier si la réservation existe
        if(!reservation) {
            return res.status(404).json({ message: `La réservation ${id} n\'existe pas`});
        }

        // Supprime la réservation
        const deletedReservation = await reservation.destroy();

        // Vérifier que la réservation est supprimée
        if(deletedReservation === 0)  {
            return res.status(404).json({ message: `La réservation ${id} n\'existe pas`})
        }
        res.status(200).json({ message: `La réservation ${id} a bien été supprimée !` });
    } catch(error) {
        res.status(500).json({ message: 'Erreur lors de la suppression de données !'})
    } 
}
```

☑️ Modifier les fonctions de Room dans le fichier ./controllers/room.controller.js.
```javascript
const { Room } = require('../config/db.js');

const getAll = async function(req, res) {
    try {
        const rooms = await Room.findAll()
        res.status(200).json({ rooms })
    } catch(error) {
        res.status(500).json({message: `Erreur serveur lors de la récupération des Rooms`});
    };
};

const getOne = async function(req, res) {
    try {
        // Récupération de l'id dans postman
        const id = req.params.id

        // Trouver la room par son id
        const room = await Room.findByPk(id)

        // Vérifier si la room existe
        if(!room) {
            return res.status(404).json({ message: `La room ${id} n'existe pas !`})
        }
        res.status(200).json({ room })
    } catch(error) {
        res.status(500).json({message: `Erreur serveur lors de la récupération d'une Room`});
    };
};

const post = async function(req, res) {
    try {
        // Récupérer les informations dans postman
        const { room_name } = req.body

        // Création d'une room
        const room = await Room.create({
            // Ajouter la valeur de postman dans notre base de donnée
            room_name
        });
        res.status(200).json({ message: `Votre room : ${room_name}, a bien été crée`});   
    } catch(error) {
    res.status(500).json({ message: 'Erreur serveur lors de la création de room'});
    };
};

const put = async function(req, res) {
    try {    
        // Trouver une room avec son ID
        const id = req.params.id;

        // Récupérer les informations dans postman
        const { room_name } = req.body
        
         // Chercher la room avec l'id
        const room = await Room.findByPk(id);

        // Vérifie qu'il y a bien une room
        if(!room) {
            return res.status(404).json({message: `La Room ${id} n'existe pas`});
        };
        
    // Modifier l'ancienne room par la nouvelle
        room.room_name = room_name

// Sauvegarder la nouvelle réservation
        await room.save();

        res.status(200).json({message: `La room a bien été modifiée` });
    } catch (error) {
        return res.status(500).json({message: `Erreur serveur lors de la modification d'une room`});
    };
};

const destroy = async function(req, res) {
    try {
        // Récuperer l'id
        const id = req.params.id;

        // Trouver la room avec l'id
        const room = await Room.findByPk(id);

        // Vérification que la room existe
        if(!room) {
            return res.status(404).json({message: `La room ${room_name} n'existe pas`});
        }

        const deletedRoom = await room.destroy();

          // Vérifier que la réservation est supprimée
        if (deletedRoom === 0) {
            return res.status(404).json({ message: `La room ${id} n\'existe pas`})
        }

        return res.status(200).json({ message: `La room ${room} a bien été supprimée`});
    } catch(error) {
        return res.status(500).json({ message: `Erreur serveur lors de la suppression d'une room`});
    };
};

module.exports = { getOne, getAll, post, put, destroy };
```

☑️ Modifier les router de Room dans le fichier ./routes/rooms.route.js.

```javascript
var express = require('express');
var router = express.Router();
var roomController = require('../controllers/room.controller.js')

/* GET */
router.get('/', roomController.getAll);
router.get('/:id', roomController.getOne);

/* POST */
router.post('/', roomController.post);

  /* PUT */
router.put('/:id', roomController.put);

  /* DELETE */
router.delete('/:id', roomController.destroy);

module.exports = router;
```

## Installer les logs

1. Créer un dossier /log.

2. Créer un fichier /.gitkeep dans le fichier /log

3. Ajouter logs/*.log dans le fichier .gitignore.

4. Créer le dossier utils à la racine du projet.

5. Créer le fichier /logger.js dans le dossier /utils.

6. Installer winston.

```bash
npm install winston
```

7. Ajouter le code ci-dessous dans le fichier /utils/logger.js.

```javascript
const winston = require('winston');

// Le niveau définira ce qui sera affiché
const levels = {
    error: 0,
    warn: 1,
    info: 2,
    http: 3,
    debug: 4,
}

// Detemine le niveau debug ou warn
const level = () => {
    const env = process.env.DEBUG || 'development'
    const isDevelopment = env === 'development'
    return isDevelopment ? 'debug' : 'warn'
}

// Couleurs choisies pour chaque élément
const colors = {
    error: 'red',
    warn: 'yellow',
    info: 'green',
    http: 'magenta',
    debug: 'white',
} 

winston.addColors(colors)

// Type de format, vous pouvez le modifier
const format = winston.format.combine(
    winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss:ms'}),
    winston.format.colorize({ all: true }),
    winston.format.printf(
        (info) => `${info.timestamp} [${info.level}] ${info.message}`,
    ),
);

const transports = [
    new winston.transports.Console(),
    new winston.transports.File({
        filename: 'logs/error.log',
        level: 'error'
    }),
    new winston.transports.File({ filename: 'logs/all.log' }),
]

const logger = winston.createLogger({
    level: level(),
    levels,
    format,
    transports,
})

module.exports = logger
```

7. Créer le fichier /morgan.middleware.js dans le dossier /middlewares.

8. Ajouter le code ci-dessous dans le fichier /morgan.middleware.
```javascript
   // morgan.middleware.js
const morgan = require("morgan");
const logger = require("../utils/logger");

const stream = {
// Use the http severity
  write: (message) => logger.http(message),
};

const skip = () => {
  const env = process.env.NODE_ENV || "development";
  return env !== "development";
};

const morganMiddleware = morgan(
":remote-addr :method :url :status :res[content-length] - :response-time ms",
  { stream, skip }
);

module.exports = morganMiddleware;
   ```
10. Importer morganMiddleware et logger dans le fichier app.
```javascript
const morganMiddleware = require("./middlewares/morgan.middleware");
const logger = require("./utils/logger");
```
11. Supprimer les lignes de code ci-dessous dans le fichier app.js.
```javascript
// const logger = require('morgan'); A supprimer
// app.use(logger('dev')); A supprimer
```
12. Ajouter dans app.js.
```javascript
app.use(morganMiddleware);

logger.http('Debut session')
```
