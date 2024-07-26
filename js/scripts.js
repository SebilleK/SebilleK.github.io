//Start Bootstrap - Personal v1.0.1 (https://startbootstrap.com/template-overviews/personal)
//Copyright 2013-2023 Start Bootstrap
//Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-personal/blob/master/LICENSE)

const personalBackToTopBtn = document.getElementById('back-to-top');
const showCertsBtn = document.getElementById('click-creds');
const certsSection = document.getElementById('creds-page');
const closeBtn = document.getElementById('close-button');
const promptSection = document.getElementById('prompt-section');

//? back to top btn functionality
function buttonStyle() {
	window.addEventListener('scroll', () => {
		if (window.scrollY > 450) {
			personalBackToTopBtn.style.display = 'block';
		} else {
			personalBackToTopBtn.style.display = 'none';
		}
	});
}

function backToTop() {
	personalBackToTopBtn.addEventListener('click', () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	});
}

//? show certs section functionality

function showSection() {
	showCertsBtn.addEventListener('click', () => {
		promptSection.classList.add('d-none');
		certsSection.classList.remove('d-none');
	});
}

function hideSection() {
	closeBtn.addEventListener('click', () => {
		certsSection.classList.add('d-none');
		promptSection.classList.remove('d-none');
	});
}

buttonStyle();
backToTop();
showSection();
hideSection();
