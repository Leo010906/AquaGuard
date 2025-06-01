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


const perguntas = [
    { texto: "Enchentes são causadas apenas por chuvas fortes.", resposta: false },
    { texto: "É importante não jogar lixo nas ruas para evitar enchentes.", resposta: true },
    { texto: "Árvores ajudam a reduzir riscos de enchentes.", resposta: true },
    { texto: "Rios transbordam apenas no verão.", resposta: false },
    { texto: "Mapas de risco ajudam na prevenção.", resposta: true },
    { texto: "Alertas não fazem diferença na segurança da população.", resposta: false },
    { texto: "O AquaGuard oferece alertas de risco.", resposta: true },
    { texto: "É seguro atravessar ruas alagadas a pé.", resposta: false },
    { texto: "Denunciar alagamentos ajuda outras pessoas.", resposta: true },
    { texto: "Enchentes só acontecem em áreas rurais.", resposta: false },
];

let indice = 0;
let pontos = 0;

mostrarPergunta();

function mostrarPergunta() {
    if (indice < perguntas.length) {
        document.getElementById("pergunta").innerText = perguntas[indice].texto;
    } else {
        document.getElementById("pergunta").innerText = "Quiz concluído!";
        document.getElementById("resultado").innerText = `Você acertou ${pontos} de ${perguntas.length} perguntas.`;
    }
}

function responder(resposta) {
    if (indice < perguntas.length) {
        if (resposta === perguntas[indice].resposta) {
            pontos++;
        }
        indice++;
        mostrarPergunta();
    }
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


