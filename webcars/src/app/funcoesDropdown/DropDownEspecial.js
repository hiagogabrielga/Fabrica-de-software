import React, { useState, useEffect } from "react";
import { modelo } from "./dados.js";
import styles from "./page.module.css";
import Link from "next/link.js";

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

    const verificarResultadoModelo = (valorMarca, valorCategoria) => {
        if (!valorCategoria && !valorMarca) {
            return modelo;
        } else if (!valorCategoria) {
            return modelo.filter((mol) => mol.marca_id_marca === valorMarca);
        } else if (!valorMarca) {
            return modelo.filter((mol) => mol.categoria_id_categoria === valorCategoria);
        } else {
            return modelo.filter(
                (mol) => mol.marca_id_marca === valorMarca && mol.categoria_id_categoria === valorCategoria
            );
        }
    };

    useEffect(() => {
        const resultado = verificarResultadoModelo(valorMarca, valorCategoria);
        setValores(resultado);
        setMensagem(resultado.length === 0 ? "Nenhum modelo encontrado para a marca e categoria selecionadas." : "");
    }, [valorMarca, valorCategoria]);

    useEffect(() => {
        setSelecionado("Escolha");
    }, [valorMarca, valorCategoria]);

    const handleSelecionar = (valor, nome) => {
        setSelecionado(nome);
        setDropdownAberto("");
        onValorSelecionado(label, valor);
    };

    const handleAbrirDropdown = () => {
        if (valores.length > 0) {
            setDropdownAberto(dropdownAberto === label ? "" : label);
        }
    };

    useEffect(() => {
        if (valores.length === 0) {
            onValorSelecionado(label, "desabilitado");
        }
    }, [valores, label, onValorSelecionado]);

    return (
        <div className={styles.filhoCampoDuasColunas}>
            <div className={styles.campodePrenchimentoDropDown}>
                <div className={styles.selectContainer}>
                    <p className={styles.label}>{label[0].toUpperCase() + label.slice(1)}</p>

                    <div
                        className={`${styles.customSelect} ${valores.length === 0 ? styles.disabled : ""}`}
                        onClick={handleAbrirDropdown}
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
                            <Link className={styles.linkclass} href='/adicionarOpcaoDropdown'><li key={`adicionarTabela${label}`} className={styles.linkOutro}>Outro</li></Link>
                        </ul>
                    )}

                    {mensagem && <p className={styles.mensagemErro}>{mensagem}</p>}
                </div>
            </div>
        </div>
    );
};

export default DropdownEspecial;
