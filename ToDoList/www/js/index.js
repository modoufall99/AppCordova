function ajouterTache() {
    let champTache = document.getElementById("champTache");
    const listeTaches = document.getElementById("listeTaches");

    if (champTache.value) {
        const liElement = document.createElement("li");
        liElement.innerHTML = champTache.value;
        $(liElement).on("swiperight", gererBalayageDroite);
        $(liElement).on("swipeleft", gererBalayageGauche);

        listeTaches.appendChild(liElement);
        $("#listeTaches").listview("refresh");

        champTache.value = '';
        $("#champTache").focus();
    }
}

function reinitialiserListe() {
    document.getElementById("listeTaches").innerHTML = '';
    document.getElementById("listeTachesTerminees").innerHTML = '';
}

function gererBalayageDroite(event) {
    if (event.target) {
        const listeTaches = document.getElementById("listeTaches");
        const listeTachesTerminees = document.getElementById("listeTachesTerminees");
        const elementCible = event.target;

        if (elementCible.parentElement.id === "listeTaches") {
            listeTachesTerminees.appendChild(elementCible);
        } else {
            listeTaches.appendChild(elementCible);
        }

        $("#listeTaches").listview("refresh");
        $("#listeTachesTerminees").listview("refresh");
    }
}

function gererBalayageGauche(event) {
    if (event.target) {
        event.target.parentElement.removeChild(event.target);
    }
}
