function formatarValorMonetarioMinimo() {
    const campoValorMin = document.getElementById('campoValorMin');
    let valorMin = campoValorMin.value.replace('R$ ', '').replace('.', '').replace(',', '.'); // Remove "R$" e formata

    if (!isNaN(valorMin) && valorMin.trim() !== '') {
        valorMin = aplicarMultiplicacaoPorZeros(parseFloat(valorMin));
        campoValorMin.value = 'R$ ' + valorMin.toLocaleString('pt-BR', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });
        atualizarCampoValorMax(valorMin);
    } else {
        campoValorMin.value = ''; // Limpa o campo se o valor não for válido
    }
}

function formatarValorMonetarioMaximo() {
    const campoValorMax = document.getElementById('campoValorMax');
    const campoValorMin = document.getElementById('campoValorMin');
    let valorMax = campoValorMax.value.replace('R$ ', '').replace('.', '').replace(',', '.');
    let valorMin = campoValorMin.value.replace('R$ ', '').replace('.', '').replace(',', '.');

    if (!isNaN(valorMax) && valorMax.trim() !== '') {
        valorMax = aplicarMultiplicacaoPorZeros(parseFloat(valorMax));

        if (valorMax >= valorMin) { // Verifica se o valor máximo é maior que o mínimo
            campoValorMax.value = 'R$ ' + valorMax.toLocaleString('pt-BR', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            });
        } else {
            alert("O valor máximo deve ser maior ou igual ao valor mínimo.");
            campoValorMax.value = ''; // Limpa o campo se o valor não for válido
        }
    } else {
        campoValorMax.value = ''; // Limpa o campo se o valor não for válido
    }
}

function atualizarCampoValorMax(valorMin) {
    const campoValorMax = document.getElementById('campoValorMax');
    const novoValorMax = valorMin + 100;

    campoValorMax.value = 'R$ ' + novoValorMax.toLocaleString('pt-BR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
}

// Função para multiplicar o valor por 10 para cada "0" ao final
function aplicarMultiplicacaoPorZeros(valor) {
    const valorStr = valor.toString();
    let contadorZeros = 0;

    // Conta quantos zeros estão no final do valor
    while (valorStr.endsWith('0')) {
        contadorZeros++;
        valorStr = valorStr.slice(0, -1); // Remove o último caractere (0)
    }

    // Multiplica o valor por 10 elevado ao número de zeros
    return valor * Math.pow(10, contadorZeros);
}

document.getElementById('campoValorMin').addEventListener('change', formatarValorMonetarioMinimo);
document.getElementById('campoValorMax').addEventListener('change', formatarValorMonetarioMaximo);
