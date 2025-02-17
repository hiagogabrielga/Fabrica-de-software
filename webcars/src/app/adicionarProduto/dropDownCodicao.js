import React, { useState } from "react";
import styles from "./page.module.css";

const DropdownSimulado = ({ label, onValorSelecionado, dropdownAberto, setDropdownAberto }) => {
    const [selecionado, setSelecionado] = useState("Escolha");
    const valores = ["Novo", "Semi novo", "Usado"]; // Valores simulados para a condição do veículo

    const handleSelecionar = (valor) => {
        setSelecionado(valor); // Atualiza a opção selecionada
        onValorSelecionado(label, valor); // Dispara a função com o valor
        setDropdownAberto(""); // Fecha o dropdown após a seleção
    };

    const handleAbrirDropdown = () => {
        setDropdownAberto(dropdownAberto === label ? "" : label); // Alterna entre abrir e fechar
    };

    return (
        <div className={styles.filhoCampoDuasColunas}>
            <div className={styles.campodePrenchimentoDropDown}>
                <div className={styles.selectContainer}>
                    <p className={styles.label}>{label[0].toUpperCase() + label.slice(1)}</p>

                    <div className={styles.customSelect} onClick={handleAbrirDropdown}>
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

                    {dropdownAberto === label && (
                        <ul className={styles.dropdownLista}>
                            {valores.map((valor, index) => (
                                <li
                                    key={index}
                                    className={`${styles.dropdownItem} ${selecionado === valor ? styles.itemSelecionado : ""}`}
                                    onClick={() => handleSelecionar(valor)}
                                >
                                    {valor}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
};

export default DropdownSimulado;
