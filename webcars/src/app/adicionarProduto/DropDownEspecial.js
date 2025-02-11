import React, { useState, useEffect } from "react";
//import axios from "axios";
import { modelo } from "./dados.js"
import styles from "./page.module.css";

const DropdownEspecial = ({
    label,
    valorMarca,
    valorCategoria,
    onValorSelecionado,
    dropdownAberto,
    setDropdownAberto
}) => {
    const [valores, setValores] = useState([]);
    const [selecionado, setSelecionado] = useState("Escolha");
    const [mensagem, setMensagem] = useState("");

    const verificarUrlModelo = (valorMarca, valorCategoria) => {
        if (!valorCategoria && !valorMarca) {
            return `http://localhost:8080/api/modelo/`;
        } else if (!valorCategoria) {
            return `http://localhost:8080/api/modelo?idMarca=${valorMarca}`;
        } else if (!valorMarca) {
            return `http://localhost:8080/api/modelo?categoria=${valorCategoria}`;
        } else {
            return `http://localhost:8080/api/modelo?categoria=${valorCategoria}&idMarca=${valorMarca}`;
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const url = verificarUrlModelo(valorMarca, valorCategoria);
                console.log("URL gerada:", url);
                //const resultado = await axios.get(url);
                const resultado = modelo

                if (resultado.data.length === 0) {
                    setMensagem("Nenhum modelo encontrado para a marca e categoria selecionadas.");
                    setValores([]);
                } else {
                    setMensagem("");
                    setValores(resultado.data);
                }
            } catch (error) {
                if (error.response && error.response.status === 404) {
                    console.warn("Nenhum dado encontrado (404).");
                    setMensagem("Nenhum modelo encontrado.");
                    setValores([]);
                } else {
                    console.error("Erro ao buscar dados:", error);
                    setMensagem("Erro ao buscar dados. Tente novamente mais tarde.");
                }
            }
        };

        fetchData();
    }, [valorMarca, valorCategoria]);

    useEffect(() => {
        // Resetando os valores quando 'valorMarca' ou 'valorCategoria' mudam
        setSelecionado("Escolha");
        setValores([]);
        setMensagem("");
    }, [valorMarca, valorCategoria]);

    const handleSelecionar = (valor, nome) => {
        setSelecionado(nome);
        setDropdownAberto(""); // Fecha o dropdown ao selecionar um item
        onValorSelecionado(label, valor); // Envia o valor selecionado para o componente pai
    };

    const handleAbrirDropdown = () => {
        setDropdownAberto(dropdownAberto === label ? "" : label); // Alterna entre abrir e fechar
    };

    // Função para desabilitar o dropdown se não houver valores
    const isDropdownDisabled = valores.length === 0;

    useEffect(() => {
        if (isDropdownDisabled) {
            onValorSelecionado(label, "desabilitado"); // Envia "desabilitado" para o pai quando não houver opções
        }
    }, [isDropdownDisabled, label, onValorSelecionado]);

    return (
        <div className={styles.filhoCampoDuasColunas}>
            <div className={styles.campodePrenchimentoDropDown}>
                <div className={styles.selectContainer}>
                    <p className={styles.label}>{label[0].toUpperCase() + label.slice(1)}</p>

                    <div
                        className={`${styles.customSelect} ${isDropdownDisabled ? styles.disabled : ""}`}
                        onClick={() => !isDropdownDisabled && handleAbrirDropdown()} // Impede a abertura do dropdown se estiver desabilitado
                    >
                        <span>{selecionado}</span>
                        <span className={styles.arrow}>
                            {dropdownAberto === label ? (
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-up" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
                                </svg>
                            )}
                        </span>
                    </div>

                    {dropdownAberto === label && valores.length > 0 && (
                        <ul className={styles.dropdownLista}>
                            {valores.map((item) => (
                                <li
                                    key={item[`id_${label}`]}
                                    className={`${styles.dropdownItem} ${selecionado === item[`nome_${label}`] ? styles.itemSelecionado : ""}`}
                                    onClick={() => handleSelecionar(item[`id_${label}`], item[`nome_${label}`])}
                                >
                                    {item[`nome_${label}`]}
                                </li>
                            ))}
                        </ul>
                    )}

                    {mensagem && <p className={styles.mensagemErro}>{mensagem}</p>}
                </div>
            </div>
        </div>
    );
};

export default DropdownEspecial;
