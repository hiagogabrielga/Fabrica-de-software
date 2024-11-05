function validarAno() {
    const campoData = document.getElementById('campoData');
    const currentYear = new Date().getFullYear() + 1;
    const inputYear = parseInt(campoData.value, 10);

    if (inputYear > currentYear) {
        alert(`O ano inserido é maior que o ano de ${currentYear}`);
        campoData.value = '';
    } else if (inputYear < 1900) {
        alert('O ano inserido não é válido!');
        campoData.value = '';
    }
}


//Valor monetário

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


function formatarValorMonetario() {
    const campo = document.getElementById('campoValor');
    let valor = campo.value.replace('R$ ', '').replace(/\./g, '').replace(',', '.'); // Remove "R$", pontos e troca vírgula por ponto

    if (!isNaN(valor) && valor.trim() !== '') {
        valor = parseFloat(valor).toFixed(2); // Converte para número e fixa em 2 casas decimais
        campo.value = 'R$ ' + parseFloat(valor).toLocaleString('pt-BR', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });
    } else {
        campo.value = ''; // Limpa o campo se o valor não for válido
    }
}


//Valo quilometragem

function formatarDistancia() {
    const distanceInput = document.getElementById('campoQuilometragem');
    let value = distanceInput.value.replace(',', '.'); // Substitui vírgula por ponto
    if (!isNaN(value) && value.trim() !== '') {
        distanceInput.value = parseFloat(value).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + ' km';
    } else {
        distanceInput.value = ''; // Limpa o campo se o valor não for um número válido
    }
}

function contarChecagemEmail() {
    const elementoEmail = document.querySelector("#checkboxEmail")
    if (!elementoEmail.checked) {
        return false
    } else {
        return true
    }
}

function contarChecagemZap() {
    const elementoZap = document.querySelector("#checkboxZapZap")
    if (!elementoZap.checked) {
        return false
    } else {
        return true
    }
}

function analizarChecagem() {
    var telefone = contarChecagemZap()
    var email = contarChecagemEmail()
    if (telefone == true || email == true) {
        
    } else {
        alert("Ao menos um dos campos deve estár marcado.")
        var elementoZap = document.querySelector("#checkboxZapZap")
        elementoZap.checked = true;
    }
}

function formatarTelefone(event) {
    let input = event.target;
    let value = input.value.replace(/\D/g, ''); // Remove todos os caracteres não numéricos

    // Limita o valor a 11 dígitos (2 para o DDD e 9 para o número)
    if (value.length > 11) {
        value = value.slice(0, 11);
    }

    // Aplica a formatação para o padrão +55 (69) 98411-1111
    if (value.length <= 10) {
        value = value.replace(/(\d{2})(\d{4})(\d{0,4})/, "+55 ($1) $2-$3");
    } else {
        value = value.replace(/(\d{2})(\d{5})(\d{0,4})/, "+55 ($1) $2-$3");
    }

    input.value = value; // Define o valor formatado no input

    // Verifica se o número está completo
    if (value.length < 18) { // O número formatado completo tem 18 caracteres
        alert("Por favor, insira um número de telefone completo.");
        input.focus();
    }
}



document.querySelector('form').addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Impede o envio do formulário
    }
});
