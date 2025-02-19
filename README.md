# TD1-docker-hello-world

Ce guide vous accompagnera dans la création de votre première application conteneurisée avec Docker. Vous apprendrez à créer une page web simple, la conteneuriser avec Nginx, et optionnellement la déployer sur GitHub Pages.

## Prérequis

- Docker installé sur votre machine
- Un éditeur de texte
- Un compte GitHub
- Git installé sur votre machine

## Structure du Projet

Créez un nouveau dossier pour votre projet et organisez-le ainsi :
```
docker-hello-world/
├── src/
│   └── index.html
├── Dockerfile
└── README.md
```

## Partie 1 : Création de la Page Web

1. Créez le dossier du projet et sa structure :
```bash
mkdir docker-hello-world
cd docker-hello-world
mkdir src
```

2. Dans le dossier `src`, créez un fichier `index.html` avec ce contenu de base :
```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Docker Workshop</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f0f0f0;
        }
        .container {
            background-color: white;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        h1 {
            color: #2c3e50;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Hello Docker !</h1>
        <p>Cette page est servie depuis un conteneur Docker.</p>
        <p>Créé par : [Votre Nom]</p>
        <p>Date : <span id="date"></span></p>
    </div>
    <script>
        document.getElementById('date').textContent = new Date().toLocaleDateString();
    </script>
</body>
</html>
```

## Partie 2 : Création du Dockerfile

1. À la racine du projet, créez un fichier `Dockerfile` :
```dockerfile
# Utilisation de l'image officielle Nginx
FROM nginx:alpine

# Copie des fichiers du site
COPY src/ /usr/share/nginx/html/

# Configuration du port d'écoute
EXPOSE 80

# Le conteneur démarre automatiquement Nginx
```

2. Créez un fichier `.dockerignore` :
```
.git
.gitignore
README.md
```

## Partie 3 : Construction et Exécution

1. Construisez l'image Docker :
```bash
docker build -t hello-docker:v1 .
```

2. Vérifiez que l'image a été créée :
```bash
docker images
```

3. Lancez le conteneur :
```bash
docker run -d -p 8080:80 --name mon-site hello-docker:v1
```

4. Vérifiez que le conteneur fonctionne :
```bash
docker ps
```

5. Accédez à votre site dans le navigateur :
   - Ouvrez http://localhost:8080

## Partie 4 : Gestion du Conteneur

Essayez ces commandes pour comprendre le cycle de vie d'un conteneur :
```bash
# Voir les logs
docker logs mon-site

# Arrêter le conteneur
docker stop mon-site

# Redémarrer le conteneur
docker start mon-site

# Supprimer le conteneur (arrêtez-le d'abord)
docker stop mon-site
docker rm mon-site
```


## Bonus : Déploiement sur GitHub Pages (Optionnel)

1. Pusher dans le repo Github associé dans Github Classroom

2. Dans votre repository GitHub, allez dans Settings > Pages

3. Dans la section "Source", sélectionnez :
   - Branch: main
   - Folder: /src

4. Cliquez sur "Save"

5. Attendez quelques minutes et votre site sera disponible à l'adresse :
   https://[votre-username].github.io/docker-hello-world/

## Validation du Travail

Votre atelier est réussi si :
- [x] Votre page HTML est créée et personnalisée
- [x] Votre Dockerfile est fonctionnel
- [x] Votre conteneur démarre correctement
- [x] Vous pouvez accéder à la page via le navigateur
- [x] Votre code est versionné sur GitHub