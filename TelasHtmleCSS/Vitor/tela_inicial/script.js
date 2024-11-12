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

document.querySelectorAll('.menu-item').forEach(function (item) {
    item.addEventListener('click', function (event) {
        event.preventDefault(); 

        
        document.querySelectorAll('.dropdown').forEach(function (dropdown) {
            if (dropdown !== item.querySelector('.dropdown')) {
                dropdown.style.display = 'none';
            }
        });

        const dropdown = item.querySelector('.dropdown');
        if (dropdown) {
            dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
        }
    });
});


document.addEventListener('click', function (event) {
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(function (dropdown) {
        if (!dropdown.parentElement.contains(event.target)) {
            dropdown.style.display = 'none';
        }
    });
});

