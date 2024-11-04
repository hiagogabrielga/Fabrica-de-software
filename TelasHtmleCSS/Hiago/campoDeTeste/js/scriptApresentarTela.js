function enviarFormulario(event) {
    event.preventDefault(); // Impede o envio do formulário, se necessário
    document.querySelector(".conclusao").style.display = "block"; // Mostra a div com a classe "conclusao"
    document.querySelector(".formulario").style.display = "none"; // Esconde a div com a classe "formulario"
}

function excluirFormulario(event) {
    event.preventDefault(); // Impede o envio do formulário, se necessário
    document.querySelector(".conclusao").style.display = "block"; // Mostra a div com a classe "conclusao"
    document.querySelector(".formulario").style.display = "none"; // Esconde a div com a classe "formulario"
}
