# Guide de déploiement sur GitHub Pages

## Étapes pour déployer le site

### 1. Créer un repository sur GitHub
- Allez sur https://github.com/new
- Nommez votre repository (ex: `sas-simply-accounts-solutions`)
- Choisissez Public ou Private
- **Ne cochez PAS** "Add README" (on en a déjà un)
- Cliquez sur "Create repository"

### 2. Connecter le dépôt local à GitHub

Remplacez `VOTRE_USERNAME` et `NOM_DU_REPO` par vos informations :

```bash
git remote add origin https://github.com/VOTRE_USERNAME/NOM_DU_REPO.git
git branch -M main
git push -u origin main
```

### 3. Activer GitHub Pages

1. Allez sur votre repository GitHub
2. Cliquez sur **Settings** (en haut du repository)
3. Dans le menu de gauche, cliquez sur **Pages**
4. Sous "Source", sélectionnez **Deploy from a branch**
5. Choisissez la branche **main**
6. Sélectionnez le dossier **/ (root)**
7. Cliquez sur **Save**

### 4. Accéder à votre site

Votre site sera disponible à l'adresse :
`https://VOTRE_USERNAME.github.io/NOM_DU_REPO/`

Exemple : `https://benneee85.github.io/sas-simply-accounts-solutions/`

### 5. Mises à jour futures

Pour mettre à jour le site après des modifications :

```bash
git add .
git commit -m "Description des changements"
git push
```

Les changements seront visibles sur GitHub Pages en quelques minutes.

