import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      <nav className={styles.nav}>
        <ul className={styles.menu}>
          <li className={styles.menu_item}>
            <Link href="#">Categorias</Link>
            <ul className={styles.dropdown}>
              {[1, 2, 3, 4, 5].map((num) => (
                <li key={num}><Link href="#">Categoria {num}</Link></li>
              ))}
            </ul>
          </li>
          <li className={styles.menu_item}><Link href="#">Catálogo 0Km</Link></li>
          <li className={styles.menu_item}><Link href="#">Seminovos</Link></li>
          <li className={styles.menu_item}><Link href="#">Vender</Link></li>
        </ul>
      </nav>

      <div className={styles.destaque}>
        <h1>Concessionárias em destaque</h1>
        <div className={styles.fundo_cards}>
          {["Concessionária 1", "Concessionária 2", "Concessionária 3", "Concessionária 4", "Concessionária 5"].map((item, index) => (
            <div className={styles.cards_cs} key={index}>
              <Image src="/images/fundo.jpg" alt="fundo" width={100} height={100}/>
              <p>{item}</p>
              <button><Link href="../../Nathan/TelaDaConcessionaria/teladaconcessionaria.html">veja mais</Link></button>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.carros_em_destaque}>
        <h1>Carros em destaque</h1>
        <div className={styles.fundo_carros}>
          {new Array(6).fill("Volkswagen Gol").map((carro, index) => (
            <div className={styles.card_carros} key={index}>
              <Image src="/images/VW-Gol-lateral.jpg" alt="carro" width={160} height={120}/>
              <p>{carro}</p>
              <button><Link href="../../Carlos/descriçao-produto.html">veja mais</Link></button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
