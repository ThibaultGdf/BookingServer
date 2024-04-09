# C8. Développer des composants dans le langage d’une base de données

- [C8. Développer des composants dans le langage d’une base de données](#c8-développer-des-composants-dans-le-langage-dune-base-de-données)
  - [Versions](#versions)
  - [Sécuritée](#sécuritée)
  - [Logs](#logs)
  - [Tests](#tests)

## Versions

- **Version** : 1.0
- **Date** : 13/3/2024

## Sécuritée

| Tâche                                                   | Validée | Validation |
| ------------------------------------------------------- | :-----: | ---------- |
| Utilisation d'Express Validator                         |   ❌    |            |
| Intégration de bcrypt pour le hashage des mots de passe |   ✅    |      /auth.controller.js      |
| Sanitisation avec Joi                                   |   ❌    |            |
| Accès aux données restreint par rôle                    |   ❌    |            |
| Implémentation du champ updatedAt dans les modèles      |   ✅    |    /models        |
| Utilisation de try/catch pour la gestion d'erreurs      |   ✅    |      /controllers      |

## Logs

| Tâche                                                    | Validée | Validation |
| -------------------------------------------------------- | :-----: | ---------- |
| Configuration et utilisation des logs (Morgan + Winston) |   ✅    |     /logs       |

## Tests

| Tâche                                                  | Validée | Validation            |
| ------------------------------------------------------ | :-----: | --------------------- |
| Développement de tests unitaires pour chaque composant |   🟠    | Implémenter les tests |
