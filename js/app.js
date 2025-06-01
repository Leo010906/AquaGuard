function toggleMenu() {
    const nav = document.getElementById('nav').querySelector('ul');
    nav.classList.toggle('show');

}

let slideindex = 0; 
showSlides();
function showSlides() {
    const slide = document.getElementsByClassName("slide");
    for (let i = 0; i < slide.length; i++) {
        slide[i].style.display = "none";  
    }
    slideindex++;
    if (slideindex > slide.length) {slideindex = 1}    
    slide[slideindex - 1].style.display = "block";  
    setTimeout(showSlides, 3000);
}

function valideForm() {
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const mensagem = document.getElementById("mensagem").value;
    if (nome === "" || email === "" || mensagem === "") {
        alert("Por favor, preencha todos os campos.");
        return false;
    }
    alert("Mensagem enviada com sucesso!");
    return true;
}