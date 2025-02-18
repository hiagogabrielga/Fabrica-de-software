"use client"; // Garante que o código seja executado no lado do cliente

import { useState } from "react";
import styles from "./header.module.css";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import CarrinhoImg from "/public/images/carrinho.png";
import { usePathname } from "next/navigation"; // Importando usePathname para verificar a rota atual

const SelectCidades = () => {
  const [cidade, setCidade] = useState("Vilhena");

  return (
    <select
      name="cidades"
      className={styles.cidades}
      value={cidade}
      onChange={(e) => setCidade(e.target.value)}
    >
      <option value="Alta Floresta D'Oeste">Alta Floresta D'Oeste</option>
      <option value="Alto Alegre dos Parecis">Alto Alegre dos Parecis</option>
      <option value="Alto Paraíso">Alto Paraíso</option>
      <option value="Alvorada D'Oeste">Alvorada D'Oeste</option>
      <option value="Ariquemes">Ariquemes</option>
      <option value="Buritis">Buritis</option>
      <option value="Cabixi">Cabixi</option>
      <option value="Cacaulândia">Cacaulândia</option>
      <option value="Cacoal">Cacoal</option>
      <option value="Campo Novo de Rondônia">Campo Novo de Rondônia</option>
      <option value="Candeias do Jamari">Candeias do Jamari</option>
      <option value="Castanheiras">Castanheiras</option>
      <option value="Cerejeiras">Cerejeiras</option>
      <option value="Chupinguaia">Chupinguaia</option>
      <option value="Colorado do Oeste">Colorado do Oeste</option>
      <option value="Corumbiara">Corumbiara</option>
      <option value="Costa Marques">Costa Marques</option>
      <option value="Espigão D'Oeste">Espigão D'Oeste</option>
      <option value="Governador Jorge Teixeira">Governador Jorge Teixeira</option>
      <option value="Guajará-Mirim">Guajará-Mirim</option>
      <option value="Itapuã do Oeste">Itapuã do Oeste</option>
      <option value="Jaru">Jaru</option>
      <option value="Ji-Paraná">Ji-Paraná</option>
      <option value="Machadinho D'Oeste">Machadinho D'Oeste</option>
      <option value="Ministro Andreazza">Ministro Andreazza</option>
      <option value="Mirante da Serra">Mirante da Serra</option>
      <option value="Monte Negro">Monte Negro</option>
      <option value="Nova Brasilândia D'Oeste">Nova Brasilândia D'Oeste</option>
      <option value="Nova Mamoré">Nova Mamoré</option>
      <option value="Nova União">Nova União</option>
      <option value="Novo Horizonte do Oeste">Novo Horizonte do Oeste</option>
      <option value="Ouro Preto do Oeste">Ouro Preto do Oeste</option>
      <option value="Parecis">Parecis</option>
      <option value="Pimenta Bueno">Pimenta Bueno</option>
      <option value="Pimenteiras do Oeste">Pimenteiras do Oeste</option>
      <option value="Porto Velho">Porto Velho</option>
      <option value="Presidente Médici">Presidente Médici</option>
      <option value="Primavera de Rondônia">Primavera de Rondônia</option>
      <option value="Rio Crespo">Rio Crespo</option>
      <option value="Rolim de Moura">Rolim de Moura</option>
      <option value="Santa Luzia D'Oeste">Santa Luzia D'Oeste</option>
      <option value="São Felipe D'Oeste">São Felipe D'Oeste</option>
      <option value="São Francisco do Guaporé">São Francisco do Guaporé</option>
      <option value="São Miguel do Guaporé">São Miguel do Guaporé</option>
      <option value="Seringueiras">Seringueiras</option>
      <option value="Teixeirópolis">Teixeirópolis</option>
      <option value="Theobroma">Theobroma</option>
      <option value="Urupá">Urupá</option>
      <option value="Vale do Anari">Vale do Anari</option>
      <option value="Vale do Paraíso">Vale do Paraíso</option>
      <option value="Vilhena">Vilhena</option>
    </select>
  );
};

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname(); // Obtém a rota atual

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css"
        rel="stylesheet"
      />
      <header className={styles.header}>
        <div className={styles.logo}>
          <Image src="/images/logo.png" alt="logo" width={60} height={60} />
        </div>

        <div className={styles.menuIcon} onClick={toggleMenu}>
          <Menu color="black" size={33} />
        </div>

        {/* Menu lateral */}
        <nav className={`${styles.menuLateral} ${menuOpen ? styles.open : ""}`}>
          <Link href="#">Criar Filtro</Link>
          <Link href="#">Perfil</Link>
          <Link href="#">Ajuda</Link>
          <Link href="#">Sair</Link>
        </nav>

        {/* Exibindo o botão Voltar somente se não estiver na Home */}
        {pathname !== "/" && (
          <div className={`${styles.voltar} ${menuOpen ? styles.hidden : ""}`}>
            <Link href="/">Voltar</Link>
          </div>
        )}

        <div className={styles.localRegiao}>
          <i className="bi bi-geo-fill"></i>
          <SelectCidades />
        </div>

        <div className={styles.barraPesquisa}>
          <input type="text" placeholder="BUSCAR CARROS, MARCAS ETC..." />
          <button className={styles.lupa}>
            <i className="bi bi-search"></i>
          </button>
        </div>

        <div className={styles.entrarLogar}>
          <Link href="#">Criar sua conta</Link>
          <Link href="#">Login</Link>
        </div>

        <div className={styles.perfilCarrinho}>
          <div className={styles.carrinho}>
            <Image src={CarrinhoImg} alt="carrinho" width={50} height={50} />
          </div>
          <div className={styles.perfil}>
            <i className="bi bi-person-circle"></i>
          </div>
        </div>
      </header>
    </>
  );
}