function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const modalCloseBtn = document.querySelector(".close");
const formData = document.querySelectorAll(".formData");
const form = document.querySelector("form");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

/**
 * Close modal function
 */
const closeModal = () => {
  modalbg.style.display = "none";
};

// Close modal event
modalCloseBtn.addEventListener("click", closeModal);

// Fonction de validation du formulaire
const validFormSubmit = (formDataObject) => {
  let formDataIsValid = true;

  // (1) Prénom : minimum de 2 caractères
  if (
    !formDataObject.firstName.value ||
    formDataObject.firstName.value.length < 2
  ) {
    formDataObject.firstName.parentElement.setAttribute(
      "data-error",
      "Veuillez entrer 2 caractères ou plus pour le champ du prénom."
    );
    formDataObject.firstName.parentElement.dataset.errorVisible = "true";
    formDataIsValid = false;
  } else {
    formDataObject.firstName.parentElement.dataset.errorVisible = "false";
  }

  // (2) Nom de famille : minimum de 2 caractères
  if (
    !formDataObject.lastName.value ||
    formDataObject.lastName.value.length < 2
  ) {
    formDataObject.lastName.parentElement.setAttribute(
      "data-error",
      "Veuillez entrer 2 caractères ou plus pour le champ du nom."
    );
    formDataObject.lastName.parentElement.dataset.errorVisible = "true";
    formDataIsValid = false;
  } else {
    formDataObject.lastName.parentElement.dataset.errorVisible = "false";
  }

  // (3) Adresse électronique : vérification de la validité
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(formDataObject.email.value)) {
    formDataObject.email.parentElement.setAttribute(
      "data-error",
      "Vous devez saisir un email valide."
    );
    formDataObject.email.parentElement.dataset.errorVisible = "true";
    formDataIsValid = false;
  } else {
    formDataObject.email.parentElement.dataset.errorVisible = "false";
  }

  // (4) Dates de naissance
  if (!formDataObject.birthdate.value) {
    formDataObject.birthdate.parentElement.setAttribute(
      "data-error",
      "Vous devez entrer votre date de naissance."
    );
    formDataObject.birthdate.parentElement.dataset.errorVisible = "true";
    formDataIsValid = false;
  } else {
    formDataObject.birthdate.parentElement.dataset.errorVisible = "false";
  }

  // (5) Nombre de concours : doit être un nombre
  if (
    !formDataObject.quantity.value ||
    formDataObject.quantity.value < 0 ||
    isNaN(formDataObject.quantity.value)
  ) {
    formDataObject.quantity.parentElement.setAttribute(
      "data-error",
      "Vous devez saisir un nombre."
    );
    formDataObject.quantity.parentElement.dataset.errorVisible = "true";
    formDataIsValid = false;
  } else {
    formDataObject.quantity.parentElement.dataset.errorVisible = "false";
  }

  // (6) Bouton radio sélectionné
  const selectedLocation = Array.from(formDataObject.locations).some(
    (location) => location.checked
  );
  if (!selectedLocation) {
    formDataObject.location6.parentElement.setAttribute(
      "data-error",
      "Vous devez choisir une option."
    );
    formDataObject.location6.parentElement.dataset.errorVisible = "true";
    formDataIsValid = false;
  } else {
    formDataObject.location6.parentElement.dataset.errorVisible = "false";
  }

  // (7) Vérifier si la case des conditions générales est cochée
  if (!formDataObject.termsAccepted.checked) {
    formDataObject.termsAccepted.parentElement.setAttribute(
      "data-error",
      "Vous devez vérifier que vous acceptez les termes et conditions."
    );
    formDataObject.termsAccepted.parentElement.dataset.errorVisible = "true";
    formDataIsValid = false;
  } else {
    formDataObject.termsAccepted.parentElement.dataset.errorVisible = "false";
  }

  return formDataIsValid;
};

const validate = () => {
  const formDataObject = {
    firstName: document.querySelector("#first"),
    lastName: document.querySelector("#last"),
    email: document.querySelector("#email"),
    birthdate: document.querySelector("#birthdate"),
    quantity: document.querySelector("#quantity"),
    locations: document.querySelectorAll('input[name="location"]'),
    location6: document.querySelector("#location6"),
    termsAccepted: document.querySelector("#checkbox1"),
    wantsUpdates: document.querySelector("#checkbox2"),
  };

  const isValid = validFormSubmit(formDataObject);
  return isValid;
};

form.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log("Formulaire soumis");
  const isValid = validate();
  if (isValid) {
    console.log("Le formulaire est conforme");
  } else {
    console.log("Le formulaire n'est pas conforme");
  }
});
