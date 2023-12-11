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


function changeImageLeft() {
	// Si nous sommes à la 1ere image 	
	if (indexImgAffichee <= 0 ){
		// alors on affiche la derniere
		indexImgAffichee = slides.length - 1;
	} else {
		// sinon on affiche l image precedente
		indexImgAffichee = indexImgAffichee -1;
	}
	bannerImage.src = "./assets/images/slideshow/" + slides[indexImgAffichee].image;	
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
	bannerImage.src = "./assets/images/slideshow/" + slides[indexImgAffichee].image;	
}

let flecheLeft = document.querySelector("#banner .arrow_left");//Récupérer un élément HTML et déclarer une variable fleche
flecheLeft.addEventListener( "click" , changeImageLeft);

let flecheRight = document.querySelector("#banner .arrow_right");//Récupérer un élément HTML et déclarer une variable fleche
flecheRight.addEventListener( "click" , changeImageRight);

