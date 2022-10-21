let slideIndex = 1;
showSlide(slideIndex);

let btnMenos = document.getElementById('btnMenos');
let btnNext = document.getElementById('btnNext');

btnMenos.addEventListener("click", currentSlide(-1));
btnNext.addEventListener("click", plusSlide(1));

function plusSlide(n){
	showSlide(slideIndex += n);
	console.log("add");
}

function currentSlide(n){
	showSlide(slideIndex = n);
	console.log("tirando");
}

function showSlide(n){
	let i;
	let slides = document.getElementsByClassName('container-img');
	if (n > slides.length) {
		slideIndex = 1
	}
	if (n < 1) {
		slideIndex = slides.length
	}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	slides[slideIndex-1].style.display = "block";
}