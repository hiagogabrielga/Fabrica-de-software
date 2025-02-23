"use client"; // Garante que o código seja executado no lado do cliente

import { useState, useEffect } from "react";
import styles from "./header.module.css";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import CarrinhoImg from "/public/images/carrinho.png";
import { usePathname } from "next/navigation"; // Importando usePathname para verificar a rota atual

const SelectCidades = () => {
  const [cidade, setCidade] = useState("Vilhena");
  const [cidades, setCidades] = useState([])

  async function getCidades() {
    try {
      const response = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados/11/municipios')
      if (!response.ok) {
        throw new Error("Erro ao buscar dados:" + response.statusText);

      }
      const data = await response.json();
      setCidades(data)
    } catch (error) {
      console.log('Ocorreu algum erro:' + error)
    }
  }

  useEffect(() => {
    getCidades()
  }, [])

  return (
    <select
      name="cidades"
      className={styles.cidades}
      value={cidade}
      onChange={(e) => setCidade(e.target.value)}
    >
      {
        cidades.map((cidade) =>
          <option value={cidade.nome} key={`${cidade.nome}_key`}>{cidade.nome}</option>
        )
      }
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
      <div className={styles.header}>
        <div className={styles.logo}>
          <Image src="/images/logo.png" alt="logo" width={60} height={60} />
        </div>

        <div className={styles.menuIcon} onClick={toggleMenu}>
          <Menu color="black" size={33} />
        </div>

        {/* Menu lateral */}
        <nav className={`${styles.menuLateral} ${menuOpen ? styles.open : ""}`}>
          <Link href="adicionarAlerta">Criar Filtro</Link>
          <Link href="perfil">Perfil</Link>
          <Link href="Suporte">Ajuda</Link>
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
          <Link href="/TelaCadastroCliente">Criar sua conta</Link>
          <Link href="/telaLogin">Login</Link>
        </div>

        <div className={styles.perfilCarrinho}>
          <div className={styles.carrinho}>
            <Image src={CarrinhoImg} alt="carrinho" width={50} height={50} />
          </div>
          <div className={styles.perfil}>
            <Link href='/perfil' className={styles.linkPerfil}>
              <i className="bi bi-person-circle"></i>
            </Link>

          </div>
        </div>
      </div>
    </>
  );
}