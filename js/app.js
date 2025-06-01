function toggleMenu() {
    const nav = document.getElementById('nav').querySelector('ul');
    nav.classList.toggle('show');

}

let slideindex = 0; 
showSlides();
function showSlides() {
    const slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideindex++;
    if (slideindex > slides.length) {slideindex = 1}    
    slides[slideindex - 1].style.display = "block";  
    setTimeout(showSlides, 2000);
}