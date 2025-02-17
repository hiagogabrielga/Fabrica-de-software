"use client"
import { useState } from "react";
import styles from "./header.module.css";
import Image from "next/image";
import Link from "next/link";
import { Menu } from 'lucide-react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Image src="/images/logo.png" alt="logo" width={60} height={60} />
      </div>

      <div className={styles.menuIcon} onClick={toggleMenu}>
        <Menu color="black" size={33} />
      </div>

      {/* Envolvendo o menu lateral dentro de uma div */}
      
        <nav className={`${styles.menuLateral} ${menuOpen ? styles.open : ""}`}>
            <Link href="#">Criar Filtro</Link>
            <Link href="#">Perfil</Link>
            <Link href="#">Ajuda</Link>
            <Link href="#">Sair</Link>
        </nav>
      

      <div className={styles.voltar}>
        <Link href="#">Voltar</Link>
      </div>

      <div className={styles.localRegiao}>
        <span>&#x1F4CD;</span>
        <select name="cidades" id="cidades">
          <option value="Vilhena" selected>Vilhena</option>
        </select>
      </div>

      <div className={styles.barraPesquisa}>
        <input type="text" placeholder="BUSCAR CARROS, MARCAS ETC..." />
        <button className={styles.lupa}>
          <span>&#128269;</span>
        </button>
      </div>

      <div className={styles.entrarLogar}>
        <Link href="/Maria/cadastroConss/cadastroPess/cadastroPess">Criar sua conta</Link>
        <Link href="/Julia/index">Login</Link>
      </div>

      <div className={styles.carrinho}>
        <img src="/carrinho.png" alt="Carrinho" />
      </div>

      <div className={styles.perfil}>
        <span>&#128100;</span>
      </div>
    </header>
  );
}
