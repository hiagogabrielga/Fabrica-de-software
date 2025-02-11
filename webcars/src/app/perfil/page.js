'use client';
import React, { useState, useEffect } from "react";
import Link from 'next/link';
import styles from './perfil.module.css';

const Perfil = () => {
    const [isModalVisivel, setModalVisivel] = useState(false);

    useEffect(() => {
        const botaoExcluir = document.getElementById("excluirConta");
        const botaoFechar = document.querySelector(".fechar");
        const botaoConcluir = document.querySelector(".concluir");
        const janelaExclusao = document.getElementById("janelaExclusao");

        if (botaoExcluir) {
            botaoExcluir.addEventListener("click", () => {
                setModalVisivel(true);
            });
        }

        if (botaoFechar) {
            botaoFechar.addEventListener("click", () => {
                setModalVisivel(false); 
            });
        }

        if (botaoConcluir) {
            botaoConcluir.addEventListener("click", () => {
                setModalVisivel(false);  
                console.log("Conta excluída!");
            });
        }

        if (janelaExclusao) {
            janelaExclusao.addEventListener("click", (event) => {
                if (event.target === janelaExclusao) {
                    setModalVisivel(false);
                }
            });
        }

        return () => {
            if (botaoExcluir) botaoExcluir.removeEventListener("click", () => {});
            if (botaoFechar) botaoFechar.removeEventListener("click", () => {});
            if (botaoConcluir) botaoConcluir.removeEventListener("click", () => {});
        };
    }, []);

    return (
        <>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" />
            <div className={`${styles.janelaExclusao} ${isModalVisivel ? styles.mostrar : ''}`} id="janelaExclusao">
                <div className={styles.exclusao}>
                    <h1>Atenção!</h1>
                    <p>Tem certeza de que deseja excluir sua conta? Esta ação é irreversível e todos os seus dados serão permanentemente apagados.</p>
                    <div className={styles.botoesFechar}>
                        <button className={styles.concluir} id="concluir">Excluir</button>
                        <button className={styles.fechar} id="fechar">Fechar</button>
                    </div>
                </div>
            </div>

            <div className={styles.container}>
                <aside className={styles.barraLateral}>
                    <div className={styles.perfil1}>
                        <i className="bi bi-person-circle"></i>
                        <button className={styles.botaoEditar}>Editar perfil</button>
                    </div>
                    <div className={styles.menu}>
                        <ul className={styles.ul}>
                            <li>
                                <Link href="/Carlos/meus-produtos">
                                    <button className={styles.botaoMenu}>Meus produtos</button>
                                </Link>
                            </li>
                            <li><button className={styles.botaoMenu}>Sair</button></li>
                            <li><button className={styles.excluirConta} id="excluirConta">Excluir conta</button></li>
                        </ul>
                    </div>
                </aside>

                <main className={styles.conteudo}>
                    <form className={styles.informaçoesPessoais}>
                        <h2>Meus dados</h2>
                        <div className={styles.informaçoes}>
                            <input type="text" placeholder="Nome completo" />
                            <input type="email" placeholder="Email" />
                        </div>
                        <div className={styles.informaçoes}>
                            <input type="text" placeholder="CPF/CNPJ" />
                            <input type="text" placeholder="Data de nascimento" />
                        </div>
                        
                        <hr className={styles.hr}/>

                        <h2>Telefones</h2>
                        <div className={styles.informaçoes}>
                            <input type="text" placeholder="+(00) 00 00000-0000" />
                            <input type="text" placeholder="+(00) 00 00000-0000" />
                        </div>

                        <hr className={styles.hr}/>

                        <h2>Endereço</h2>
                        <div className={styles.informaçoes}>
                            <input type="text" placeholder="CEP" />
                            <input type="text" placeholder="Estado" />
                        </div>
                        <div className={styles.informaçoes}>
                            <input type="text" placeholder="Cidade" />
                            <input type="text" placeholder="Bairro" />
                        </div>
                        <div className={styles.informaçoes}>
                            <input type="text" placeholder="Endereço" />
                            <input type="text" placeholder="Número" />
                        </div>

                        <div className={styles.botaoSalvar}>
                            <button type="submit">Salvar Alterações</button>
                        </div>
                    </form>
                </main>
            </div>
        </>
    );
};

export default Perfil;
