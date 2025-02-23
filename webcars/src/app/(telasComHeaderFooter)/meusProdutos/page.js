'use client';
import React, { useState } from "react";
import Link from 'next/link';
import style from './meus-produtos.module.css';
import Image from "next/image";

const carros = Array(19).fill({
    nome: "Volkswagen Gol",
    imagem: "/images/VW-Gol-lateral.jpg",
  });

const MeusProdutos = () => {

    const [showButtons, setShowButtons] = useState(null);
    const toggleButtons = (index) => {
        if (showButtons === index) {
            setShowButtons(null);
        } else {
            setShowButtons(index);
        }
    };

    return (
        <>
            <h1 className={style.titulo}>Meus Produtos</h1>

            <div className={style.container}>
                <div className={style.fundoCarro}>
                    <div className={style.cardCarros}>
                        <Image src="/images/Plus.png" alt="imagePlus" width={70} height={70} className={style.imagemPlus}/>
                        <a href="/adicionarProduto"><button className={style.bot}>Adicionar</button></a>
                    </div>

                    {carros.map((carro, index) => (
                        <div key={index} className={style.cardCarros}>
                            <div className={style.imageContainer}>
                                <Image src={carro.imagem} alt={carro.nome} width={300} height={200}  className={style.imagemCarro}/>
                                <i
                                    className={`bi bi-three-dots ${style.icon}`}
                                    onClick={() => toggleButtons(index)}
                                ></i>
                                {showButtons === index && (
                                    <div className={style.butao}>
                                        <Link href="/editarProduto" className={style.editar}>
                                            Editar
                                        </Link>
                                        <Link href="#" className={style.delete}>
                                            Excluir
                                        </Link>
                                    </div>
                                )}
                            </div>
                            <p>{carro.nome}</p>
                            <Link href="/descricaoProduto">
                                <button>Veja mais</button>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default MeusProdutos;