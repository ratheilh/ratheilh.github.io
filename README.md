# Site académique de Vinasetan Ratheil Houndji

Ce dépôt contient le code source du site publié à l’adresse <https://ratheilh.github.io/>.

## Ouvrir le projet dans IntelliJ IDEA

1. Installer Node.js 22 LTS sur l’ordinateur.
2. Dans IntelliJ IDEA, choisir **File > Open** et sélectionner le dossier du dépôt.
3. Ouvrir le fichier `package.json`, puis accepter l’installation des dépendances proposée par IntelliJ, ou lancer `npm install` dans le terminal intégré.
4. Choisir la configuration **Site — aperçu local** dans la barre supérieure, puis cliquer sur **Run**.
5. Ouvrir <http://localhost:3000> dans le navigateur.

## Modifier les contenus

- Page d’accueil : `app/page.tsx`
- Recherche : `app/recherche/page.tsx`
- Publications : `app/publications/page.tsx`
- Enseignement : `app/enseignement/page.tsx`
- Encadrements : `app/encadrements/page.tsx`
- Engagements : `app/engagements/page.tsx`
- Contact : `app/contact/page.tsx`
- Navigation et pied de page : `app/site-components.tsx`
- Apparence générale : `app/globals.css`
- Photographie : `public/ratheil-houndji.webp`

## Vérifier et publier

Avant d’envoyer les modifications, exécuter la configuration **Site — vérifier avant publication**. Si elle se termine sans erreur :

1. ouvrir l’onglet **Commit** d’IntelliJ ;
2. sélectionner les fichiers modifiés ;
3. saisir un message court ;
4. choisir **Commit and Push**.

Chaque envoi sur la branche `main` déclenche automatiquement la construction et la publication du site sur GitHub Pages. L’avancement est visible dans l’onglet **Actions** du dépôt GitHub.

## Première récupération du dépôt

Depuis IntelliJ IDEA, choisir **File > New > Project from Version Control**, puis utiliser :

```text
https://github.com/ratheilh/ratheilh.github.io.git
```
