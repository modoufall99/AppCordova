function calculerAge() {
  // Récupérer l'année de naissance entrée par l'utilisateur
  let anneeNaissance = document.getElementById("naissance").value;

  // Obtenir l'année actuelle
  let anneeActuelle = new Date().getFullYear();

  // Calculer l'âge en soustrayant l'année de naissance de l'année actuelle
  let age = anneeActuelle - anneeNaissance;

  // Vérifier si l'âge est négatif
  if (age < 0) {
      alert("L'année de naissance ne peut pas être supérieure à l'année actuelle !");
      return;
  }

  // Afficher le résultat
  document.getElementById("resultat").innerText = "Vous avez " + age + " ans.";
  document.querySelector("fieldset").removeAttribute("hidden");
}
