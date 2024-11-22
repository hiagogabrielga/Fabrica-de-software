let menuAberto = false;

function toggleMenu() {
    const menu = document.getElementById("menuLateral");  

    if (menuAberto) {
        // Fecha o menu
        menu.style.left = "-300px";  
        menuAberto = false;
    } else {
        // Abre o menu
        menu.style.left = "10px";  
        menuAberto = true;
    }
}

// Adiciona o evento de clique em cada item do menu
document.querySelectorAll('.menu-item').forEach(function (item) {
    item.addEventListener('click', function (event) {
        const dropdown = item.querySelector('.dropdown');
        if (dropdown && event.target.tagName !== 'A') {
            // Só previne o comportamento padrão se não for um clique no link
            event.preventDefault();

            // Fecha outros dropdowns abertos
            document.querySelectorAll('.dropdown').forEach(function (dropdownEl) {
                if (dropdownEl !== dropdown) {
                    dropdownEl.style.display = 'none';
                }
            });

            // Abre ou fecha o dropdown atual
            dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
        }
    });
});

// Fecha os dropdowns ao clicar fora
document.addEventListener('click', function (event) {
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(function (dropdown) {
        if (!dropdown.parentElement.contains(event.target)) {
            dropdown.style.display = 'none';
        }
    });
});
