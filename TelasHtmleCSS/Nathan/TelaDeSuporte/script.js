document.getElementById('confirmButton').addEventListener('click', function() {
    // Substitui o botão por um elemento não clicável
    this.outerHTML = '<div class="non-clickable">Entraremos em contato</div>';
  });
  