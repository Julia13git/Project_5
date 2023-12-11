/******************************* INITIALISATION ********************************** */

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


// Conserve l'index de l image affichée en cours (on commence par la 1ere)
let indexImgAffichee = 0;
let bannerImage = document.querySelector("#banner .banner-img");
let bannerText = document.querySelector("#banner p");	
let bannerDot = document.querySelectorAll(".dot");
let flecheLeft = document.querySelector("#banner .arrow_left");//Récupérer un élément HTML et déclarer une variable fleche
let flecheRight = document.querySelector("#banner .arrow_right");//Récupérer un élément HTML et déclarer une variable fleche

/******************************* EVENTS ********************************** */
flecheLeft.addEventListener( "click" , changeImageLeft);
flecheRight.addEventListener( "click" , changeImageRight);


/******************************* FUNCTIONS ********************************** */

function changeImageLeft() {
	// Si nous sommes à la 1ere image 	
	if (indexImgAffichee <= 0 ){
		// alors on affiche la derniere
		indexImgAffichee = slides.length - 1;
	    
	} else {
		// sinon on affiche l image precedente
		indexImgAffichee = indexImgAffichee -1;

	}
	displayImgAndSelectDot();
}

function changeImageRight() {	
		// Si nous sommes a la dernière image
	if (indexImgAffichee >= slides.length -1 ){
		// Alors on affiche le 1er element
		indexImgAffichee = 0;
	} else {
		// Sinon on affiche l image suivante
		indexImgAffichee = indexImgAffichee + 1;
	}
	displayImgAndSelectDot();
}

function displayImgAndSelectDot(){
	bannerImage.src = "./assets/images/slideshow/" + slides[indexImgAffichee].image;
	bannerText.innerHtml = slides[indexImgAffichee].tagLine;
	document.querySelector(".dot_selected").classList.remove("dot_selected");
	// Display one selected current img
	bannerDot[indexImgAffichee].classList.add("dot_selected");
}



