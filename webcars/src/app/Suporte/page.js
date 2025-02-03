'use client';
import React from "react";
import Link from 'next/link';
import Image from 'next/image';
import styles from "./Suporte.module.css";

const Suporte = () => {
    return (
      <>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" />
        <main className={styles.main}>
          <div className={styles.conteudoWrapper}>
            <section className={styles.opcoesSuporte}>
              <h2>Tela de Suporte</h2>
              <p>Escolha uma das opções abaixo para que possamos identificar melhor o seu problema e ajudar da melhor maneira possível:</p>
              <div className={styles.botoes}>
                <button className={styles.botaoSuporte}><i className="bi bi-car-front"></i> Problemas para cadastrar o produto</button>
                <button className={styles.botaoSuporte}><i className="bi bi-arrow-clockwise"></i> Erro ao carregar as atualizações</button>
                <button className={styles.botaoSuporte}><i className="bi bi-gear"></i> Gerenciamento de cookies</button>
                <button className={styles.botaoSuporte}><i className="bi bi-telephone"></i> Problemas com o contato no site</button>
                <button className={styles.botaoSuporte}><i className="bi bi-person"></i> Problemas para criar/logar na conta</button>
                <button className={styles.botaoSuporte}><i className="bi bi-universal-access"></i> Acessibilidade</button>
                <button className={styles.botaoSuporte}><i className="bi bi-justify"></i> Outros</button>
                <button className={styles.botaoSuporte}><i className="bi bi-file-earmark-text"></i> Termos e condições</button>
                <button className={styles.botaoSuporte}><i className="bi bi-exclamation-triangle"></i> Atenção</button>
                <button className={`${styles.botaoSuporte} ${styles.botaoConfirmar}`} id="botaoConfirmar">
                  <i className="bi bi-check-circle"></i> Confirmar
                </button>
              </div>
            </section>
            
            <aside className={styles.infoContato}>
              <div className={styles.containerIcone}>
                <div className={styles.fundoCircular}><i className="bi bi-robot"></i></div>
              </div>
              <div className={styles.detalhesContato}>
                <p>
                  <i className="bi bi-whatsapp" style={{ color: "#50B231" }}></i> 
                  <a href="https://wa.me/69012345678" target="_blank" rel="noopener noreferrer">WhatsApp: (69) 012345678</a>
                </p>
                <p>
                  <i className="bi bi-envelope" style={{ color: "#C51D1D" }}></i>
                  <a href="mailto:WebCars@gmail.com" target="_blank" rel="noopener noreferrer">Email: WebCars@gmail.com</a>
                </p>
              </div>
            </aside>
          </div>
        </main>
      </>
    );
  };
  
  export default Suporte;