document.addEventListener("DOMContentLoaded", () => {
    const janelaExclusao = document.getElementById("janela_exclusao");
    const botaoExcluir = document.getElementById("excluir-conta");
    const botaoFechar = document.querySelector(".fechar");
    const botaoConcluir = document.querySelector(".concluir");
    const exclusao = document.querySelector(".exclusao");

    if (!janelaExclusao || !botaoExcluir || !botaoFechar || !botaoConcluir || !exclusao) {
        console.error("Erro: Elementos não encontrados!");
        return;
    }

    botaoExcluir.addEventListener("click", () => {
        console.log("Botão 'Excluir comta' clicado!");
        janelaExclusao.classList.add("mostrar");
    });

    botaoFechar.addEventListener("click", () => {
        console.log("Botão 'Fechar' clicado!");
        janelaExclusao.classList.remove("mostrar");
    });

    botaoConcluir.addEventListener("click", () => {
        console.log("Botão 'Concluir' clicado!");
        janelaExclusao.classList.remove("mostrar");
    });

    janelaExclusao.addEventListener("click", (event) => {
        if (event.target === janelaExclusao) {
            console.log("Clique fora do modal, fechando...");
            janelaExclusao.classList.remove("mostrar");
        }
    });
});