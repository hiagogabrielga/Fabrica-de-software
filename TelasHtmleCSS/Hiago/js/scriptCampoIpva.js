document.getElementById('campoIpva').addEventListener('change', function() {
    var campoDataVencimento = document.getElementById('campoDataVencimento');
    if (this.checked) {
        campoDataVencimento.style.display = 'block'; // Exibe o campo de data se estiver marcado
    } else {
        campoDataVencimento.style.display = 'none';  // Esconde o campo de data se desmarcado
    }
});
