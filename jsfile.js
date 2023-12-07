const myslide = document.querySelectorAll('.myslide'),
	  dot = document.querySelectorAll('.dot');
let counter = 1;
slidefun(counter);

let timer = setInterval(autoSlide, 8000);
function autoSlide() {
	counter += 1;
	slidefun(counter);
}
function plusSlides(n) {
	counter += n;
	slidefun(counter);
	resetTimer();
}
function currentSlide(n) {
	counter = n;
	slidefun(counter);
	resetTimer();
}
function resetTimer() {
	clearInterval(timer);
	timer = setInterval(autoSlide, 8000);
}

function slidefun(n) {
	
	let i;
	for(i = 0;i<myslide.length;i++){
		myslide[i].style.display = "none";
	}
	for(i = 0;i<dot.length;i++) {
		dot[i].className = dot[i].className.replace(' active', '');
	}
	if(n > myslide.length){
	   counter = 1;
	   }
	if(n < 1){
	   counter = myslide.length;
	   }
	myslide[counter - 1].style.display = "block";
	dot[counter - 1].className += " active";
}









const hamburgerButton = document.querySelector(".ri-menu-5-fill");
const hamburgerMenu = document.querySelector(".drop-down");
let isDisplayed = false;

function handleResize(){
    let width = window.innerWidth;
    if (width > 600) {
        hamburgerMenu.style.display = "none";
    }
}

window.addEventListener("resize",handleResize);



hamburgerButton.addEventListener('click',function(){
    if (isDisplayed == true){
        hamburgerMenu.style.display = "none";
    } 
    // if(isDisplayed == false && window.innerWidth < 600) {
        else {
        hamburgerMenu.style.display = "block";

    }

    isDisplayed = !isDisplayed;

})





let currentIndex = 0;
const testimonials = document.querySelector('.testimonials');
const testimonialWidth = document.querySelector('.testimonial').offsetWidth;

function slideTestimonials(direction) {
    currentIndex = (currentIndex + direction + testimonials.children.length) % testimonials.children.length;
    updateTestimonials();
}

function updateTestimonials() {
    testimonials.style.transform = `translateX(${-currentIndex * testimonialWidth}px)`;
}