'use client'
import React, { useState } from "react";
import styles from './adicionarOpcao.module.css';
import DropdownSimulado from "./DropDownCampos";
import { categoria, cambio, modelo, cor, marca, combustivel, aro } from "@/components/funcoesDropdown/dados.js";

export default function AdicionarProduto() {
    const [dropdownAberto, setDropdownAberto] = useState("");
    const [valorCampo, setValorCampo] = useState("");
    const [pesquisa, setPesquisa] = useState("");
    const [novaOpcao, setNovaOpcao] = useState("");

    const handleValorSelecionado = (label, valor) => {
        if (label === 'campos') {
            if (valor.toLowerCase() == 'combustível') {
                setValorCampo('combustivel');
            } else if (valor.toLowerCase() == 'câmbio') {
                setValorCampo('cambio')
            } else {
                setValorCampo(valor.toLowerCase());
            }

            setPesquisa(""); // Resetar pesquisa ao mudar o campo
        }
    };

    const dadosMap = {
        "cor": cor,
        "modelo": modelo,
        "aro": aro,
        "combustivel": combustivel,
        "marca": marca,
        "cambio": cambio,
        "categoria": categoria
    };

    const getDados = () => dadosMap[valorCampo] || [];

    const dadosFiltrados = getDados().filter(item =>
        item[`nome_${valorCampo}`]?.toLowerCase().includes(pesquisa.toLowerCase())
    );

    const podeAdicionar = pesquisa && !dadosFiltrados.some(item => item[`nome_${valorCampo}`].toLowerCase() === pesquisa.toLowerCase());

    const handleAdicionarOpcao = () => {
        if (podeAdicionar) {
            console.log(`Enviando nova opção: ${pesquisa} para o campo ${valorCampo}`);
            setNovaOpcao(""); // Resetar após envio
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.containerFormulario}>
                <div className={styles.containerMensagem}>
                    <h2>Não encontrou o que deseja? Adicione a opção desejada aqui!</h2>
                </div>
                <div>
                    <div>
                        <label>Qual campo não encontrou opção?</label>
                        <DropdownSimulado
                            label="campos"
                            onValorSelecionado={handleValorSelecionado}
                            dropdownAberto={dropdownAberto}
                            setDropdownAberto={setDropdownAberto}
                        />
                    </div>
                    {valorCampo && (
                        <div className={styles.containerListaEBuscar}>
                            <div className={styles.campoBuscarInput}>
                                <label>Pesquisar opções existentes:</label>
                                <input
                                    type="text"
                                    value={pesquisa}
                                    onChange={(e) => setPesquisa(e.target.value)}
                                />
                            </div>

                            <ul className={styles.listaResultadoBusca}>
                                {dadosFiltrados.map((item) => (
                                    <li key={item[`id_${valorCampo}`]}>{item[`nome_${valorCampo}`]}</li>
                                ))}
                            </ul>
                            {podeAdicionar && (
                                <button className={styles.estilobtn} onClick={handleAdicionarOpcao}>Adicionar "{pesquisa}"</button>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
