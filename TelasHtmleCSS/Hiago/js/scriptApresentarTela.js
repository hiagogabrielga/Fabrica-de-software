document.getElementById("botaoEnviar").addEventListener("click", function(event) {
    event.preventDefault(); // Impede o envio do formulário, se necessário
    document.querySelector(".conclusao").style.display = "block"; // Mostra a div com a classe "conclusao"
    document.querySelector(".formulario").style.display = "none"
});


document.getElementById("botaoExcluir").addEventListener("click", function(event) {
    event.preventDefault(); // Impede o envio do formulário, se necessário
    document.querySelector(".conclusao").style.display = "block"; // Mostra a div com a classe "conclusao"
    document.querySelector(".formulario").style.display = "none"
});
