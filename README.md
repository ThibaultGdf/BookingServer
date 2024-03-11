# PROJET : BookingServer

## Initialisation du serveur

☑️ Créer un dossier projet.

```javascript
$ mkdir BookingServer
```

☑️ Créer un dossier backend à l'intérieur du dossier projet.

```javascript
$ cd BookingServer
$ mkdir backend
```

☑️ Se déplacer dans le dossier backend à l'aide du terminal et installer express.

```javascript
$ cd backend
$ npm install express-generator
```

☑️ Importer le fichier app.js ainsi que d'autres dossiers.

```javascript
$ npx express-generator
```

☑️ Supprimer le dossier public et le dossier views.

☑️ Installer les dépendances nécessaires :

```javascript
$ npm install nodemon sequelize cors dotenv jsonwebtoken bcryptjs
```

☑️ Automatiser l'actualisation du serveur dans le fichier package.json.

```javascript
"start": "node --watch ./bin/www"
```

☑️ Allumer le serveur sur le port 3000.

```javascript
$ npm run start
```

## Implémentation des routes

☑️ Créer les fichers dans le dossier routes.

```javascript
$ cd routes
$ touch reservations.route.js
$ touch rooms.route.js
$ touch spots.route.js
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

## Ajouter les routes dans les fichiers.

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

☑️ Créer les routes sur postman.


Gérer les requêtes GET, POST, PUT et DELETE pour chaque route.

🔘  Valider les données entrantes et renvoyer des erreurs si nécessaire.

🔘  Formater les réponses de l'API de manière cohérente.

### Créer la base de données

🔘  Choisir un système de gestion de base de données (SGBD) : PostgreSQL, MySQL, MongoDB, etc.

🔘  Installer le SGBD et créer une nouvelle base de données.

🔘  Créer les tables et les relations nécessaires dans la base de données.

🔘  Définir les modèles de données pour chaque table.

### Lien entre la base de données et les routes

🔘  Utiliser sequelize pour se connecter à la base de données.

🔘  Définir les modèles de données sequelize pour chaque table.

🔘  Utiliser les modèles pour effectuer des requêtes CRUD dans la base de données.

🔘  Associer les modèles aux routes de l'API.

### Authentification

🔘  Implémenter un système d'authentification pour protéger les routes de l'API.

🔘  Utiliser bcryptjs pour hacher les mots de passe des utilisateurs.

🔘  Générer des jetons Web JSON (JWT) pour les utilisateurs authentifiés.

🔘  Vérifier les jetons JWT pour autoriser l'accès aux routes protégées.

### Implémenter les tests

🔘  Installer Mocha et Chai pour les tests unitaires.

🔘  Écrire des tests unitaires pour chaque route de l'API.

🔘  Tester la validation des données entrantes et la gestion des erreurs.

🔘  Tester l'interaction avec la base de données.

🔘  Mettre en place un système d'intégration continue (CI) pour exécuter les tests automatiquement.

