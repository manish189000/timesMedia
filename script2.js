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
