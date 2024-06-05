document.addEventListener("deviceready", loadContacts, false);

function loadContacts() {
    let options = new ContactFindOptions();
    options.multiple = true;
    options.hasPhoneNumber = true;
    let fields = ["name", "phoneNumbers"];
    navigator.contacts.find(fields, showContacts, handleError, options);
}

function showContacts(contacts) {
    let code = '';
    for (let i = 0; i < contacts.length; i++) {
        code += `
            <li data-id="${i}">
                <a href="#" class="voirDetails">
                    <img src="img/avatar.png" alt="photo de profil du contact">
                    <h1>${contacts[i].name.formatted}</h1>
                    <p>${contacts[i].phoneNumbers[0].value}</p>
                </a>
            </li>
        `;
    }
    document.getElementById("contactList").innerHTML = code;
    $('#contactList').listview('refresh');

    // Ajout d'un gestionnaire d'événements pour voir les détails du contact
    document.querySelectorAll(".voirDetails").forEach(item => {
        item.addEventListener("click", voirDetailsContact);
    });
}

function voirDetailsContact(event) {
    let contactId = event.target.closest("li").getAttribute("data-id");
    let contact = navigator.contacts[contactId];
    // Vous pouvez utiliser `contact` pour afficher les détails du contact, par exemple :
    alert("Nom : " + contact.name.formatted + "\nTéléphone : " + contact.phoneNumbers[0].value);
}

function handleError(error) {
    console.log(error);
}

// Fonction pour ajouter un contact
document.getElementById("ajouterContact").addEventListener("click", ajouterContact);

function ajouterContact() {
    // Demander à l'utilisateur de saisir le nom et le numéro de téléphone du nouveau contact
    let nom = prompt("Entrez le nom du nouveau contact:");
    let numeroTelephone = prompt("Entrez le numéro de téléphone du nouveau contact:");

    // Vérifier si l'utilisateur a fourni un nom et un numéro de téléphone
    if (nom && numeroTelephone) {
        // Créer un nouvel objet Contact
        let nouveauContact = navigator.contacts.create();

        // Définir le nom du nouveau contact
        nouveauContact.name = { formatted: nom };

        // Définir le numéro de téléphone du nouveau contact
        nouveauContact.phoneNumbers = [{ value: numeroTelephone, type: "mobile" }];

        // Sauvegarder le nouveau contact dans le répertoire
        nouveauContact.save(() => {
            alert("Le nouveau contact a été ajouté avec succès !");
            // Rafraîchir la liste des contacts pour afficher le nouveau contact ajouté
            loadContacts();
        }, (erreur) => {
            alert("Erreur lors de l'ajout du contact : " + erreur.code);
        });
    } else {
        alert("Veuillez fournir un nom et un numéro de téléphone pour ajouter un nouveau contact.");
    }
}
