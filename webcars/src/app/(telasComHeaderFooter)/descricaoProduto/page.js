'use client';
import React, { useState } from "react";
import Link from 'next/link';
import Image from 'next/image';
import styles from './decricao-produto.module.css';

const Suporte = () => {
    const images = [
        "/images/VW-Gol-frente-lateral.jpg",
        "/images/VW-Gol-frente.jpg",
        "/images/VW-Gol-interior.jpg",
        "/images/VW-Gol-lateral-traseira.jpg",
        "/images/VW-Gol-traseira.jpg",
        "/images/VW-Gol-lateral.jpg",
        "/images/VW-Gol-interior.jpg",
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handleNextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handlePreviousImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const changeImage = (index) => {
        setCurrentImageIndex(index);
    };

    return (
        <>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css" rel="stylesheet" />
            <div className={styles.container}>
                <div className={styles.secaoImagens}>
                    <img
                        id="imagemPrincipal"
                        src={images[currentImageIndex]}
                        alt="Imagem principal do carro"
                    />
                    <div className={styles.carrosselImagens}>
                        <img
                            src="/images/seta esquerda.jpg"
                            alt="Seta para esquerda"
                            className={styles.botaoSeta}
                            onClick={handlePreviousImage}
                        />
                        {images.map((src, index) => (
                            <img
                                key={index}
                                src={src}
                                alt={`Miniatura ${index + 1}`}
                                className={`${styles.miniatura} ${index === currentImageIndex ? styles.miniaturaAtiva : ''}`}
                                onClick={() => changeImage(index)}
                            />
                        ))}
                        <img
                            src="/images/seta direita.jpg"
                            alt="Seta para direita"
                            className={styles.botaoSeta}
                            onClick={handleNextImage}
                        />
                    </div>
                </div>

                <div className={styles.secaoPrecos}>
                    <h2>Gol Volkswagen</h2>
                    <p className={styles.precoAntigo}>R$ 79.490,00</p>
                    <p className={styles.desconto}>-5%</p>
                    <p className={styles.precoNovo}>
                        R$ 75.515,50 <span className={styles.detalheDesconto}>à vista</span>
                    </p>
                    <p className={styles.textoOu}>ou</p>
                    <p className={styles.parcelas}>2x de R$ 39.745,50 sem juros</p>
                    <button className={styles.botaoListaDesejos}>Adicionar à Lista de Desejos</button>
                    <button className={styles.botaoLoja}>Ver na Loja</button>
                </div>

                <div className={styles.secaoContatos}>
                    <h3>Formas de Contato</h3>
                    <div className={styles.opcaoContato}>
                        <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
                            <i className="bi-whatsapp"></i>
                            WhatsApp
                        </a>
                    </div>
                    <div className={styles.opcaoContato}>
                        <a href="mailto:profissional@email.com">
                            <div className={styles.gmail}>
                                <i className="bi-envelope-fill"></i>
                            </div>
                            E-mail Profissional
                        </a>
                    </div>
                </div>

                <div className={styles.detalhesCarro}>
                    <div className={styles.gridDetalhes}>
                        <div>
                            <p><strong>Marca</strong></p>
                            <p>Volkswagen</p>
                        </div>
                        <div>
                            <p><strong>Modelo</strong></p>
                            <p>Gol</p>
                        </div>
                        <div>
                            <p><strong>Ano</strong></p>
                            <p>2019</p>
                        </div>
                        <div>
                            <p><strong>Câmbio</strong></p>
                            <p>Automático</p>
                        </div>
                        <div>
                            <p><strong>Estado</strong></p>
                            <p>Usado</p>
                        </div>
                        <div>
                            <p><strong>Categoria</strong></p>
                            <p>Hatch</p>
                        </div>
                        <div>
                            <p><strong>Aro</strong></p>
                            <p>14</p>
                        </div>
                        <div>
                            <p><strong>Quilometragem</strong></p>
                            <p>24.000</p>
                        </div>
                        <div>
                            <p><strong>Tipo de Combustível</strong></p>
                            <p>Gasolina</p>
                        </div>
                        <div>
                            <p><strong>Ano de Compra</strong></p>
                            <p>2021</p>
                        </div>
                        <div>
                            <p><strong>Seguro</strong></p>
                            <p>Sim</p>
                            <p className={styles.detalheData}>Até (data)</p>
                        </div>
                        <div>
                            <p><strong>IPVA</strong></p>
                            <p>Pago</p>
                            <p className={styles.detalheData}>Até (data)</p>
                        </div>
                        <div>
                            <p><strong>Blindagem</strong></p>
                            <p>Sim</p>
                        </div>
                    </div>
                </div>

                <div className={styles.secaoEspecificacoes}>
                    <h3>Detalhes</h3>
                    <div className={styles.mensagem}>
                        <p>Especificações <br /> gerais do carro</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Suporte;