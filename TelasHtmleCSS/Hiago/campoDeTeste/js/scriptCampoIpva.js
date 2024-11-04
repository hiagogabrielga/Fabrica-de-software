function toggleDataVencimento() {
    var campoIpva = document.getElementById('campoIpva');
    var campoDataVencimento = document.getElementById('campoDataVencimento');
    if (campoIpva.checked) {
        campoDataVencimento.style.display = 'flex'; // Exibe o campo de data se estiver marcado
    } else {
        campoDataVencimento.style.display = 'none';  // Esconde o campo de data se desmarcado
    }
}
