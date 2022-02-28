# ECF Médiatèque

## Travail demander

Dans le dossier vous trouverez 3 fichiers :
- index.html
- app.css
- app.js

### 1. HTML
---

- Concevoir la page HTML qui nous permettra de visualiser un tableau avec toutes les informations des films.

- Concevoir un formulaire nous permettant d'ajouter un film dans la liste

- Plus, un champ de sélection afin de filtrer les films par leur titre ou par leur année

### 2. CSS
---

- Pour la mise en forme, vous utiliserez le framework Bootstrap ou utiliser votre propre CSS.
- Votre page devra être responsive

### 3. JavaScript
---

- Dans le fichier *app.js* vous trouverez un tableau d'objets avec 4 valeurs qui sera votre base de données à afficher lors de l'ouverture de votre page HTML.

- Aucun script ou attribut javascript dois être présent dans le fichier HTML !

- Tâche à accomplir :
    - [x] Afficher les films dans un tableau
    - [x] Créer un bouton *"Ajouter"* qui nous fera apparaître un formulaire
        - Une zone de saisie pour le titre
        - Une zone de saisie pour l'année
        - Une zone de saisie pour l'auteur
        - Un bouton pour sauvegarder
    - [x] Vérifier les données saisi par l'utilisateur dans le formulaire d'ajout
        - Titre : minimum 2 caratères
        - Année : format de l'année 4 chiffres compris entre 1900 et l'année en cours
        - Auteur : minimum de 5 caractères 
    - [x] Si le formulaire est valide ajouter le film dans le tableau
        - On enregistrera le titre et le nom de l'auteur avec la première lettre en MAJUSCULE
        - Afficher un message d'alerte pendant 5s : "Film ajouter avec succès"
    - [x] Sinon on affichera un message d'erreur
        - Afficher un message d'alerte pandant 5s : "Erreur dans le formulaire " + zone d'erreur
    - [x] Pour le filtre :
        - Si l'option filtre par titre est sélection on affichera les films par ordre alphabétique
        - Si l'option filtre par année est sélection on affichera les films par ordre décroissant
    - [x] Enfin, pour chaque film on ajoutera un bouton *"Supprimer"* qui me permettra de retirer le film de ma liste
        - On demandera une confirmation de suppression :
            - Si la personne confirme la suppression on retirera le film de la liste
            - Sinon on annulera la demande de supression

### 4. Liens utiles
---

#### Doc JavaScript
- [Event Reference](https://developer.mozilla.org/en-US/docs/Web/Events)
- [Create Elements](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement)
- [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [Function](https://developer.mozilla.org/en-US/docs/Glossary/Function)
- [Walking the DOM](https://javascript.info/dom-navigation)
- [Methods DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement#See_also)
- [RegExp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp)
- [Operator `this`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)
---

## Bonus (+)

- Faite une mise en page du site en mode One page ( En-tête, menu, décors )

- Ajouter au moins une librairie JS
