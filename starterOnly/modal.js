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
    formDataIsValid = false;
  } else {
  }

  // (2) Nom de famille : minimum de 2 caractères
  if (
    !formDataObject.lastName.value ||
    formDataObject.lastName.value.length < 2
  ) {
    formDataIsValid = false;
  } else {
  }

  // (3) Adresse électronique : vérification de la validité
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(formDataObject.email.value)) {
    formDataIsValid = false;
  } else {
  }

  // (4) Dates de naissance
  if (!formDataObject.birthdate.value) {
    formDataIsValid = false;
  } else {
  }

  // (5) Nombre de concours : doit être un nombre
  if (
    !formDataObject.quantity.value ||
    formDataObject.quantity.value < 0 ||
    isNaN(formDataObject.quantity.value)
  ) {
    formDataIsValid = false;
  } else {
  }

  // (6) Bouton radio sélectionné
  const selectedLocation = Array.from(formDataObject.locations).some(
    (location) => location.checked
  );
  if (!selectedLocation) {
    formDataIsValid = false;
  } else {
  }

  // (7) Vérifier si la case des conditions générales est cochée
  if (!formDataObject.termsAccepted.checked) {
    formDataIsValid = false;
  } else {
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
