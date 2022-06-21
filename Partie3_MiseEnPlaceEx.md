# Partie 3: Mise en place de l'environement d'exercice

Dans cette partie nous allons commencer à mettre en place notre exercice qui consitera à créer une PWA.

# Pour débuter

1. Créer un nouveau repository Github
   **ATTENTION** nommez le: _votrePseudoGithub.github.io_ ( nous verrons pourquoi par la suite, déjà une petite idée ? )

   ![height:300px](./images/NewRepoGithub.JPG)

---

2. Clonez votre repository sur votre machine
3. Ouvrez le dans votre editeur/IDE favoris
4. Créez une architecture de dossier suivant cette proposition (_italique_ = dossier / **gras** = fichier)
   - _dist_
     - _assets_
     - _style_
     - **index.html**
     - **main.js**
5. Créez un squelette HTML de base (racourcis clavier dans VSCode => _!_ + _enter_ ).
6. Ajoutez y le titre de la PWA dans la balise _title_ => Ciné★thèque.
7. Ajoutez dans la balise _head_ la ligne
   ```HTML
   <script defer scr="main.js"><script>
   ```
   **Point théorique**: le mot clé _defer_ rend possible la déclaration de la balise _script_ dans la balise _head_ même si celle-ci se trouve au tout début du document HTML. Le chargement du script se fera quand même après le HTML. _defer_ agis de la même façon que si le script avait été déclaré à la fin du document HTML.

---

8. Rajoutez cette ligne dans le fichier _main.js_

   ```js
   console.log(42);
   ```

9. Pour voir si tout ce que nous avons fait marche, il faut mettre en place un serveur web de developpement. Vous avez le choix ! Soit vous êtes dans VSCode ou tout autre IDE qui implémente un live-server, vous lancez donc juste votre serveur. Soit vous installer un live-server sur votre machine qui marchera partout peu importe votre IDE. Plus besoin d'être tributaire de votre éditeur de code.
   - **OPTIONEL**: pour faire cela, un peu de mise en place.
     - Premièrement il faut avoir [NodeJS](https://nodejs.org/en/) d'installer sur votre machine car nous allons installer ce qui s'appelle un _package npm_.
     - Il faut savoir qu'en installant _NodeJS_ le package manager (_npm_ pour Node Package Manager) de celui-ci est aussi installer. Vous avez donc la possibilité d'utiliser l'entiéreté des package mis à disposition par la communeauté sur le site de [npm](https://www.npmjs.com/).
     - Nous allons pour notre part nous intéresser au package [live-server](https://www.npmjs.com/package/live-server). Ce package que nous allons installer **globalement** pour qu'il puisse être indépendant de notre projet, nous permettra, après configuration, de lancer un live-server pour notre projet en une seule petite commande.
     - Pour l'installation insérer cette ligne dans votre console bash
     ```bash
     $> npm install -g live-server
     ```

---

10. **SUITE OPTIONEL** Vous avez donc _live-server_ d'installer globalement sur votre machine. Pour information complémentaire sur une machine windows le fichier se trouve sous:

    ```
    C:\Users\votreNomDeUsers\AppData\Roaming\npm
    ```

    Maintenant dernière configuration, nous allons créer un fichier _package.json_ dans notre repository que nous venons de cloner et ou nous avons déjà amener une architecture de dossier (ce fichier viendra se positioner à la racine). Copier-coller le code suivant dans votre fichier nommé _package.json_.

    ```json
    {
      "name": "cinemathequepwa",
      "version": "1.0.0",
      "main": "index.html",
      "scripts": {
        "dev": "live-server dist/"
      },
      "author": "NF01",
      "license": "MIT"
    }
    ```

    La partie _script_ crée juste un alias pour utiliser la commande live server. Au lieu d'écrire _live-server dist/_ pour démarrer le live-server, nous aurons juste besoin d'écrire _npm run dev_ dans la console.
    Voilà ! maintenant que vous voudrez utiliser un live server dans un de vos projet il vous suffira simplement de mettre le fichier _package.json_ dans votre repository et hop c'est fini !

---

11. Vous devriez donc avoir votre browser d'ouvert avec une page blanche (puisque il n'y a rien dans le html pour l'instant) et si vous ouvrez la console de votre navigateur vous devrier apercevoir la sortie _42_ ( le console.log(42) de notre fichier _main.js_ ).

# Ressources

[Introduction à NodeJS ](https://mediacomem.github.io/comem-archioweb/2021-2022/subjects/node/?home=MediaComem%2Fcomem-archioweb%23readme#1)

[Introduction à npm ](https://mediacomem.github.io/comem-archioweb/2021-2022/subjects/npm/?home=MediaComem%2Fcomem-archioweb%23readme#1)

# Exercice pratique n°1

**DONNÉE**: le but de ce premier exercice pratique et de construire le squelette HTML de la page d'accueil de notre PWA.
Comme dit précédemment nous allons créer une cinémathèque. Il faut donc créer:

- Un logotype ( = le nom de la PWA => Ciné★thèque)

  - Ce logotype doit être coder en html (donc pas de svg, ni image quelconque)
  - Référez-vous à la CSS sous navabar (voir commentaires) pour créer le logotype

---

- Une section _globalPage_ qui comporte:

  - Des filtres

    - Un champ de filtre textuel ( pour pouvoir trier les film par nom )
    - Un bouton de filtre par étoiles ( pour pouvoir trier le film par notes )
    - Un bouton de filtre par dates ( pour pouvoir trier le film par dates de visionage )
    - Un bouton de remise à zéro des filtres

  - Un bouton d'ajout (pour ajouter les films)
  - Une partie qui contiendra tout les objets films. Un film est compsé de:
    - Une image
    - Un titre
    - Une date
    - Des étoiles
    - Un bouton de supression de l'objet film
