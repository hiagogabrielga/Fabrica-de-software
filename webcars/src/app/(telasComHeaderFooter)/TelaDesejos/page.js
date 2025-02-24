'use client';
import React, { useState } from "react";
import Link from 'next/link';
import style from './listaDesejos.module.css';
import Image from "next/image";

const carros = Array(19).fill({
    nome: "Volkswagen Gol",
    imagem: "/images/VW-Gol-lateral.jpg",
  });

const telaDesjos = () => {
    return (
        <>
            <h1 className={style.titulo}>LISTA DE DESEJO</h1>
            <button className={style.comp}>Compartilhar</button>

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

export default telaDesjos;