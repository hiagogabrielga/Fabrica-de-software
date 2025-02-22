function formatarQuilometragem(dados) {
    const distanceInput = dados;
    let value = distanceInput.value;

    value = value.replace(/[^\d,.]/g, '');
    value = value.replace(',', '.');

    if (!isNaN(value) && value.trim() !== '') {
        const numero = parseFloat(value);

        const formatado = numero.toLocaleString('pt-BR', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        });

        distanceInput.value = `${formatado} km`;
    } else {
        distanceInput.value = '';
    }
}

function validarAno(dados) {
    const campoData = dados;
    const currentYear = new Date().getFullYear() + 1;
    const inputYear = parseInt(campoData.value, 10);

    if (inputYear > currentYear) {
        alert(`Valor inválido, o ano inserido é maior que o ano de ${currentYear}`);
        campoData.value = '';
    } else if (inputYear < 1900) {
        alert('O ano inserido não é válido!');
        campoData.value = '';
    }
}

function formatarValorMonetario(dados) {
    const campo = dados;
    let valor = campo.value;

    // Remove todos os caracteres que não são números, pontos ou vírgulas
    valor = valor.replace(/[^\d,.-]/g, '');

    // Substitui vírgulas por pontos para facilitar a conversão
    valor = valor.replace(',', '.');

    // Verifica se o valor é um número válido
    if (!isNaN(valor) && valor.trim() !== '') {
        // Converte para número
        const numero = parseFloat(valor);

        // Verifica se o número é negativo
        if (numero < 0) {
            campo.value = ''; // Limpa o campo se o valor for negativo
            alert('O valor monetário não pode ser negativo.'); // Avisa o usuário
            return;
        }

        // Formata o número com separadores de milhar e duas casas decimais
        const formatado = numero.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        });

        // Atualiza o valor do campo
        campo.value = formatado;
    } else {
        // Limpa o campo se o valor não for um número válido
        campo.value = '';
    }
}

function validarAnoCalendario(dados) {
    const dataInput = dados.value;
    const dataAtual = new Date();
    const dataInserida = new Date(dataInput);
    console.log(dataInserida)
    console.log(dataAtual)
    // Verifica se o valor inserido é uma data válida
    if (isNaN(dataInserida.getTime())) {
        dados.value = ''; // Limpa o campo se a data for inválida
        alert('Por favor, insira uma data válida.'); // Exibe uma mensagem de erro
        return;
    }

    // Verifica se a data inserida é superior à data atual
    if (dataInserida > dataAtual) {
        dados.value = ''; // Limpa o campo se a data for superior à atual
        alert('A data não pode ser superior à data atual.'); // Exibe uma mensagem de erro
    } else {
        console.log('Data válida:', dataInput); // Log para depuração (opcional)
    }
}

export { formatarQuilometragem, validarAno, formatarValorMonetario, validarAnoCalendario };