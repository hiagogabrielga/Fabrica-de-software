'use client';
import React, { useState } from "react";
import Link from 'next/link';
import styles from './perfil.module.css';

const Perfil = () => {
    const [isModalVisivel, setModalVisivel] = useState(false);
    const [logicPerfil, setLogicPerfil] = useState(true);

    const handleExcluirClick = () => {
        setModalVisivel(true);
    };

    const handleFecharClick = () => {
        setModalVisivel(false);
    };

    const handleConcluirClick = () => {
        setModalVisivel(false);
    };

    return (
        <>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" />
            <div className={`${styles.janelaExclusao} ${isModalVisivel ? styles.mostrar : ''}`} id="janelaExclusao">
                <div className={styles.exclusao}>
                    <h1>Atenção!</h1>
                    <p>Tem certeza de que deseja excluir sua conta? Esta ação é irreversível e todos os seus dados serão permanentemente apagados.</p>
                    <div className={styles.botoesFechar}>
                        <Link href="/telaLogin">
                            <button className={styles.concluir} id="concluir" onClick={handleConcluirClick}>Excluir</button>
                        </Link>
                        <button className={styles.fechar} id="fechar" onClick={handleFecharClick}>Fechar</button>
                    </div>
                </div>
            </div>

            <div className={styles.container}>
                <aside className={styles.barraLateral}>
                    <div className={styles.perfil1}>
                        <i className="bi bi-person-circle"></i>
                        <button 
                            className={logicPerfil ? styles.botaoEditar : styles.botaoEditarNclick} 
                            disabled={!logicPerfil} 
                            onClick={() => setLogicPerfil(!logicPerfil)}
                        >
                            Editar perfil
                        </button>
                    </div>
                    <div className={styles.menu}>
                        <ul className={styles.ul}>
                            <li>
                                <Link href="/MeusAlertas">
                                    <button className={styles.botaoMenu}>Meus alertas</button>
                                </Link>
                                <Link href="/meusProdutos">
                                    <button className={styles.botaoMenu}>Meus produtos</button>
                                </Link>
                            </li>
                            <li><button className={styles.botaoMenu}>Sair</button></li>
                            <li><button className={styles.excluirConta} id="excluirConta" onClick={handleExcluirClick}>Excluir conta</button></li>
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

                        <hr className={styles.hr} />

                        <h2>Telefones</h2>
                        <div className={styles.informaçoes}>
                            <input type="text" placeholder="+(00) 00 00000-0000" />
                            <input type="text" placeholder="+(00) 00 00000-0000" />
                        </div>

                        <hr className={styles.hr} />

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
                            <button 
                                disabled={logicPerfil} 
                                onClick={() => setLogicPerfil(!logicPerfil)} 
                                className={logicPerfil ? styles.btnNclicavel : styles.btnClicavel} 
                                type="submit"
                            >
                                Salvar Alterações
                            </button>
                        </div>
                    </form>
                </main>
            </div>
        </>
    );
};

export default Perfil;