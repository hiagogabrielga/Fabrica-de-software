const botoesSuporte = document.querySelectorAll('.botao-suporte:not(.botao-confirmar)');
const botaoConfirmar = document.getElementById('botaoConfirmar');
let confirmado = false;

botoesSuporte.forEach(botao => {
    botao.addEventListener('click', () => {
        if (!confirmado) {
            if (botao.classList.contains('ativo')) {
                botao.classList.remove('ativo');
            } else {
                botao.classList.add('ativo');
            }
        }
    });
});

botaoConfirmar.addEventListener('click', () => {
    confirmado = true;
    botoesSuporte.forEach(botao => {
        botao.disabled = true;
        botao.classList.add('bloqueado');
    });

    const blocoConfirmacao = document.createElement('div');
    blocoConfirmacao.classList.add('bloqueio-confirmado');
    blocoConfirmacao.textContent = 'Confirmação enviada';

    botaoConfirmar.replaceWith(blocoConfirmacao);
});
