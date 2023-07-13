const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// Sélectionner les éléments des flèches gauche et droite
const flecheGauche = document.querySelector("#left");
const flecheDroite = document.querySelector("#right");

// Ajouter un event listener pour le clic sur la flèche gauche
flecheGauche.addEventListener("click", function(event) {
  // Code à exécuter lorsque la flèche gauche est cliquée
  console.log("Clic sur la flèche gauche !");
});

// Ajouter un event listener pour le clic sur la flèche droite
flecheDroite.addEventListener("click", function(event) {
  // Code à exécuter lorsque la flèche droite est cliquée
  console.log("Clic sur la flèche droite !");
});


// Compter le nombre d'éléments dans le tableau slides
const nombreSlides = slides.length;

// Sélectionner l'élément HTML qui représente la partie basse du slider
const basSlider = document.querySelector("#dots");

// Ajouter les bullet points
for (let i = 0; i < nombreSlides; i++) {
  // Créer un élément <span> pour représenter un bullet point
  const bulletPoint = document.createElement("span");
  
  // Ajouter la classe "dot" à tous les bullet points
  bulletPoint.classList.add("dot");
  
  // Si c'est le premier bullet point, ajouter la classe "dot_selected" pour le mettre en évidence
  if (i === 0) {
    bulletPoint.classList.add("dot_selected");
  }
  
  // Ajouter le bullet point à la partie basse du slider
  basSlider.appendChild(bulletPoint);
}

// Sélectionner les éléments des flèches gauche et droite
const Gauche = document.querySelector("#left");
const Droite = document.querySelector("#right");

// Sélectionner l'élément HTML qui représente l'image du slider
const imageSlider = document.querySelector(".banner-img");

// Sélectionner l'élément HTML qui représente le texte du slider
const texteSlider = document.querySelector("#banner p");

// Garder une variable pour suivre l'index du slide actif
let indexSlideActif = 0;

// Fonction pour mettre à jour le slide
function mettreAJourSlide() {
  // Mettre à jour le bullet point actif
  const bulletPoints = document.querySelectorAll(".dot");
  bulletPoints.forEach((bulletPoint, index) => {
    bulletPoint.classList.toggle("dot_selected", index === indexSlideActif);
  });

  // Mettre à jour l'image
  const cheminImage = './assets/images/slideshow/'+ slides[indexSlideActif].image;
  imageSlider.src = cheminImage;

  // Mettre à jour le texte correspondant à l'image
  const tagLine = slides[indexSlideActif].tagLine;
  texteSlider.innerHTML = tagLine;
}

// Ajouter un event listener pour le clic sur la flèche droite
Droite.addEventListener("click", function(event) {
  // Passer au slide suivant
  indexSlideActif++;
  if (indexSlideActif === slides.length) {
    indexSlideActif = 0;
  }

  // Mettre à jour le slide
  mettreAJourSlide();
});

// Ajouter un event listener pour le clic sur la flèche gauche
Gauche.addEventListener("click", function(event) {
  // Passer au slide précédent
  indexSlideActif--;
  if (indexSlideActif < 0) {
    indexSlideActif = slides.length - 1;
  }

  // Mettre à jour le slide
  mettreAJourSlide();
});
