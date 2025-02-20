'use client';
import React from "react";
import Link from 'next/link';
import Image from 'next/image';
import styles from "./TelaDaConcessionaria.module.css";

const TelaDaConcessionaria = () => {
    return (
      <main className={styles.conteudoPrincipal}>
        <section className={styles.secaoFoto}>
          <div className={styles.containerFoto}>
            <p className={styles.textoFoto}>foto da concessionária</p>
          </div>
        </section>
  
        <section className={styles.secaoInformacoes}>
          <div className={styles.containerSobre}>
            <h2>Sobre</h2>
            <div className={styles.conteudoSobre}>
              <p><strong>Nome:</strong> Concessionária XX</p>
              <p><strong>Localidade:</strong> Porto Velho, RO</p>
              <p><strong>Horário:</strong> 08 às 20 horas</p>
              <p><strong>Telefone fixo:</strong> 55+ 66 0100101</p>
              <p><strong>Carros anunciados:</strong> 100</p>
            </div>
          </div>
          <div className={styles.containerContatos}>
            <h2>Contatos</h2>
            <div className={styles.itemContato}>
              <i className="bi bi-whatsapp"></i> Agende um horário
            </div>
            <div className={styles.itemContato}>
              <i className="bi bi-instagram"></i> Veja mais sobre
            </div>
            <div className={styles.itemContato}>
              <i className="bi bi-facebook"></i> Veja mais sobre
            </div>
          </div>
        </section>
  
        <section className={styles.secaoProdutos}>
          <h2>Produtos do vendedor</h2>
          <div className={styles.containerProdutos}>
            {[1, 2, 3, 4].map((_, index) => (
              <div key={index} className={styles.cartaoProduto}>
                <img src="/images/VW-Gol-lateral.jpg" alt="Volkswagen Gol" />
                <p>Volkswagen Gol</p>
                <button>
                  <Link href="/carlos/descricao-produto">veja mais</Link>
                </button>
              </div>
            ))}
          </div>
        </section>
      </main>
    );
  };
  
  export default TelaDaConcessionaria;