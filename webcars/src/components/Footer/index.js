'use client';
import React from "react";
import styles from "./footer.module.css";
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.logo}>
          <img src="/images/logo.png" alt="Logo" />
        </div>
        <div className={styles.footerLinks}>
          <div className={styles.column}>
            <h3>Institucional</h3>
            <ul>
              <li><Link className={styles.link} href="#">Acessibilidade</Link></li>
              <li><Link className={styles.link} href="#">Gerenciamento de cookies</Link></li>
              <li><Link className={styles.link} href="#">Termos e condições</Link></li>
            </ul>
          </div>
          <div className={styles.column}>
            <h3>Comprar</h3>
            <ul>
              <li><Link className={styles.link} href="/telaFiltroCarrosVGC">Veículos novos</Link></li>
              <li><Link className={styles.link} href="/telaFiltroCarrosVGC">Veículos semi-novos</Link></li>
              <li><Link className={styles.link} href="/telaFiltroCarrosVGC">Veículos usados</Link></li>
            </ul>
          </div>
          <div className={styles.column}>
            <h3>Novidades</h3>
            <ul>
              <li><Link className={styles.link} href="/Vitor/tela_inicial/index">Os mais populares</Link></li>
              <li><Link className={styles.link} href="/Vitor/tela_inicial/index">Promoções</Link></li>
            </ul>
          </div>
          <div className={styles.column}>
            <h3>Ajuda</h3>
            <ul>
              <li><Link className={styles.link} href="/Maria/cadastroConss/cadastroPess/cadastroPess">Criar conta</Link></li>
              <li><Link className={styles.link} href="/telaLogin">Logar conta</Link></li>
              <li><Link className={styles.link} href="/perfil">Meu perfil</Link></li>
              <li><Link className={styles.link} href="/Suporte">Suporte</Link></li>
              <li><Link className={styles.link} href="/adicionarProduto">Vender veículo</Link></li>
              <li><Link className={styles.link} href="#">Contato: +55 (69) 012345678</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>© 2024–2025 Webcars do Brasil Ltda. Todos os direitos do site reservado</p>
      </div>
    </footer>
  );
};

export default Footer;
