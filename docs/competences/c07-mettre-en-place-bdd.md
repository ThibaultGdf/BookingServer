# C7. Mettre en place une base de données

- [C7. Mettre en place une base de données](#c7-mettre-en-place-une-base-de-données)
  - [Versions](#versions)
  - [Mise en place](#mise-en-place)
  - [Convention](#convention)
  - [Accès](#accès)
  - [Logs](#logs)

## Versions

- **Version** : 1.0
- **Date** : 13/3/2024

## Mise en place

| Tâche                                                | Validée | Validation |
| ---------------------------------------------------- | :-----: | ---------- |
| Setup indiqué dans la documentation                  |   ✅    |    [Projet](https://github.com/ThibaultGdf/BookingServer)        |
| Fichier et dossier modèle                            |   ✅    |     /models + /migrations      |
| Génération de seed automatisée                       |   ✅    |     /seeders       |
| Implémentation de différence base (dev/test/preprod) |   ✅    |     ??       |
| Fichier de config + .env éventuellement              |   ✅    |      /config + .env      |

## Convention

| Tâche               | Validée | Validation |
| ------------------- | :-----: | ---------- |
| Nommage des modèles |   ✅    |     /models       |

## Accès

| Tâche                                                 | Validée | Validation |
| ----------------------------------------------------- | :-----: | ---------- |
| Authentification                                      |   ✅    |      /auth.controller.js      |
| Autorisation d’accès                                  |   ✅    |      /auth.route.js      |
| Assurer le Contrôle d'Accès Basé sur les Rôles (RBAC) |   ✅    |      /auth.controller.js      |

## Logs

| Tâche                                  | Validée | Validation |
| -------------------------------------- | :-----: | ---------- |
| - Utilisation de Morgan et Winston     |   ✅    |      /logs      |
