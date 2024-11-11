let menuAberto = false;

function toggleMenu() {
    const menu = document.getElementById("menuLateral");
    const voltar = document.querySelector(".voltar");  

    if (menuAberto) {
        // Fecha o menu
        menu.style.left = "-300px";  
        voltar.style.left = "1px";  
    
        menuAberto = false;
    } else {
        // Abre o menu
        menu.style.left = "10px";  
        voltar.style.left = "-300px";  
        menuAberto = true;
    }
}
