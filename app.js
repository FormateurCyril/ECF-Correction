var films = [{
        name: "Deadpool",
        years: 2016,
        authors: "Tim Miller"
    },
    {
        name: "Spiderman",
        years: 2002,
        authors: "Sam Raimi"
    },
    {
        name: "Scream",
        years: 1996,
        authors: "Wes Craven"
    },
    {
        name: "It: chapter 1",
        years: 2019,
        authors: "Andy Muschietti"
    }
];

// TODO
// Variable
var tbody = document.querySelector('tbody');
var formElt = document.getElementById('form');
var divErreur = document.getElementById('alert')
var filtre = document.getElementById('filtre')

var btnForm = document.createElement('button');
btnForm.textContent = "Ajouter";
btnForm.type = 'button'
btnForm.classList.add('btn')
btnForm.classList.add('btn-primary');

formElt.appendChild(btnForm);

btnForm.addEventListener('click', afficherForm);
filtre.addEventListener('change', filterBy);

afficherFilms();


/**
 * @function afficherFilms - Permet d'afficher les films dans le tableau HTML
 */
function afficherFilms() {

    tbody.innerHTML = "";

 

    films.forEach((film, indice) => {
        let tr = document.createElement('tr');
        let tdTitre = document.createElement('td');
        let tdAnnee = document.createElement('td');
        let tdAuteur = document.createElement('td');
        let tdAction = document.createElement('td');
        let btnSupprimer = document.createElement('button');

        tdTitre.textContent = film.name;
        tdAnnee.textContent = film.years;
        tdAuteur.textContent = film.authors

        btnSupprimer.textContent = "Supprimer";
        btnSupprimer.classList.add('btn');
        btnSupprimer.classList.add('btn-danger');
        btnSupprimer.dataset.id = indice;
        tdAction.appendChild(btnSupprimer);

        btnSupprimer.addEventListener('click', supprimerFilm);

        tr.appendChild(tdTitre);
        tr.appendChild(tdAnnee);
        tr.appendChild(tdAuteur);
        tr.appendChild(tdAction);
        tbody.appendChild(tr);

    });
}

/**
 * @function supprimerFilm - Permet de supprimer un film dans mon tableau
 */
function supprimerFilm(){

    if(confirm("êtes-vous sur de vouloir supprimer ce film ?")){
        //console.log(this.dataset.id);
        films.splice(this.dataset.id ,1);
        afficherFilms();
    }
}

/**
 * @function afficherForm - Afficher le formulaire d'ajout d'un film
 */
function afficherForm() {
    divForm = document.createElement('div');
    divForm.classList.add('row-cols-lg-auto');
    divForm.classList.add('g-3');
    divForm.classList.add('align-items-center');

    let inputTitre = document.createElement('input')
    inputTitre.type = 'text';
    inputTitre.id = 'title';
    inputTitre.placeholder = 'Entrer un titre';
    inputTitre.classList.add('form-control');

    let inputAnnee = document.createElement('input')
    inputAnnee.type = 'number';
    inputAnnee.id = 'years';
    inputAnnee.placeholder = 'Entrer une année';
    inputAnnee.classList.add('form-control');

    let inputAuteur = document.createElement('input')
    inputAuteur.type = 'text';
    inputAuteur.id = 'author';
    inputAuteur.placeholder = 'Entrer un auteur';
    inputAuteur.classList.add('form-control');

    let btnAjouter = document.createElement('button');
    btnAjouter.textContent = "Ajouter";
    btnAjouter.type = 'submit';
    btnAjouter.classList.add('btn')
    btnAjouter.classList.add('btn-success');

    btnAjouter.addEventListener('click', formCheck);

    divForm.appendChild(inputTitre);
    divForm.appendChild(inputAnnee);
    divForm.appendChild(inputAuteur);
    divForm.appendChild(btnAjouter);

    formElt.replaceChild(divForm, btnForm)

}

/**
 * @function formCheck - Permet d'afficher et de vérifier le formulaire
 */
function formCheck() {
    let inputTitre = document.getElementById('title').value
    let inputAnnee = parseInt(document.getElementById('years').value)
    let inputAuteur = document.getElementById('author').value

    let alerts = [];
    let yearsToday = (new Date()).getFullYear();
    let regexAnnee = new RegExp('[0-9]{4}');

    if (inputTitre === null || inputTitre.length < 2) {
        alerts.push('Le titre dois contenir au minimum 2 caractères');
    }

    if (inputAnnee === null || !regexAnnee.test(inputAnnee) || inputAnnee < 1900 || inputAnnee > yearsToday) {
        alerts.push("L'année dois être comprise entre 1900 et " + yearsToday);
    }

    if (inputAuteur === null || inputAuteur.length < 5) {
        alerts.push("Le nom de l'auteur dois contenir au minimum 5 caractères");
    }


    divErreur.innerHTML = "";
    if (alerts.length > 0) {
        let divAlert = document.createElement("div");
        divAlert.classList.add('alert');
        divAlert.classList.add('alert-danger');

        let ulAlert = document.createElement("ul");
        alerts.forEach(erreur => {
            liElt = document.createElement("li");
            liElt.textContent = erreur;
            ulAlert.appendChild(liElt);
        })

        divAlert.appendChild(ulAlert);
        divErreur.appendChild(divAlert);
    } else {
        films.push({
            name: capitalize(inputTitre),
            years: inputAnnee,
            authors: capitalize(inputAuteur)
        });

        let divAlert = document.createElement("div");
        divAlert.classList.add('alert');
        divAlert.classList.add('alert-success');
        divAlert.innerHTML = "Film enregistrer avec succès";
        divErreur.appendChild(divAlert);

        formElt.replaceChild(btnForm, divForm);

        afficherFilms();
    }

    setTimeout(function () {
        divErreur.innerHTML = "";
    }, 5000)
}

/**
 * @function capitalize - Permet de mettre la premiere lettre en majuscule
 * @param {String} mot 
 */
function capitalize(mot) {
    return mot.charAt(0).toUpperCase() + mot.slice(1)
}

/**
 * @function filterBy - Permet de filtrer ma liste de film selon le selecteur
 */
function filterBy() {
    if (this.value !== '#') {
        if (this.value == "title") {
            films.sort(function (a, b) {
                var nameA = a.name.toUpperCase(); // ignore upper and lowercase
                var nameB = b.name.toUpperCase(); // ignore upper and lowercase
                if (nameA < nameB) {
                    return -1;
                }
                if (nameA > nameB) {
                    return 1;
                }

                // names must be equal
                return 0;
            });
        } else if (this.value == "years") {
            films.sort(function (a, b) {
                return b.years - a.years;
            });
        }
        afficherFilms();
    }
}
