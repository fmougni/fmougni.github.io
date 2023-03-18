
const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});
const signInForm = document.querySelector('.sign-in-form');

// Gestionnaire d'événements pour le formulaire de connexion
signInForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const email = signInForm.querySelector('input[type="email"]').value;
  const mot_de_passe = signInForm.querySelector('input[type="password"]').value;
  const token = signInForm.querySelector('#token').value;

  try {
    const response = await fetch('https://aback-legend-hamster.glitch.me/authentification', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, mot_de_passe }),
    });

    if (!response.ok) {
      throw new Error('Erreur lors de la connexion');
    }

    // Stocker le token dans le localStorage
    localStorage.setItem('token', token);

    // Rediriger l'utilisateur vers la page app.html
    window.location.href = 'application.html';
  } catch (error) {
    console.error('Erreur:', error.message);
  }
});














const signUpForm = document.querySelector('.sign-up-form');

// Gestionnaire d'événements pour le formulaire d'inscription
signUpForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = signUpForm.querySelector('input[type="email"]').value;
  const mot_de_passe = signUpForm.querySelector('input[type="password"]').value;
  const confirmPassword = signUpForm.querySelector('#confirmpassword').value;
  const errorMessage = signUpForm.querySelector('#error-message');

  errorMessage.textContent = '';

  if (mot_de_passe !== confirmPassword) {
    errorMessage.textContent = 'Erreur: Les mots de passe ne correspondent pas.';
    return;
  }

  try {
    const response = await fetch('https://aback-legend-hamster.glitch.me/inscription', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, mot_de_passe }),
    });
    if (!response.ok) {
      throw new Error('Erreur lors de l\'inscription');
    }

   // const data = await response.json();
   // console.log('Inscription réussie:', data);
    // Afficher la pop-up
    alert('Un mail de confirmation contenant votre token d\'authentification vous a été envoyé à votre adresse mail.');
    container.classList.remove("sign-up-mode");
    // Stocker les informations d'authentification et rediriger l'utilisateur vers la page d'accueil
  } catch (error) {
    errorMessage.textContent = 'Erreur: ' + error.message;
  }
});
