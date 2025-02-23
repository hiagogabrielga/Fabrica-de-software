'use client';
import React, { useState } from "react";
import Link from 'next/link';
import style from './meus-produtos.module.css';

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
                        <img src="/images/Plus.png" alt=""/>
                        <a href="/adicionarProduto"><button className={style.bot}>Adicionar</button></a>
                    </div>

                    <div className={style.cardCarros}>
                        <div className={style.imageContainer}>
                            <img src="/images/VW-Gol-lateral.jpg" alt=""/>
                            <i
                                className={`bi bi-three-dots ${style.icon}`}
                                onClick={() => toggleButtons(0)}
                            ></i>
                            {showButtons === 0 && (
                                <div className={style.butao}>
                                    <a href="/editarProduto" className={style.editar}>Editar</a>
                                    <a href="" className={style.delete}>Excluir</a>
                                </div>
                            )}
                        </div>
                        <p>Volksvagem gol</p>
                        <a href="/descricaoProduto"><button>Veja mais</button></a>
                    </div>
                    <div className={style.cardCarros}>
                        <div className={style.imageContainer}>
                            <img src="/images/VW-Gol-lateral.jpg" alt=""/>
                            <i
                                className={`bi bi-three-dots ${style.icon}`}
                                onClick={() => toggleButtons(1)}
                            ></i>
                            {showButtons === 1 && (
                                <div className={style.butao}>
                                    <a href="/editarProduto" className={style.editar}>Editar</a>
                                    <a href="" className={style.delete}>Excluir</a>
                                </div>
                            )}
                        </div>
                        <p>Volksvagem gol</p>
                        <a href="/descricaoProduto"><button>Veja mais</button></a>
                    </div>
                    <div className={style.cardCarros}>
                        <div className={style.imageContainer}>
                            <img src="/images/VW-Gol-lateral.jpg" alt=""/>
                            <i
                                className={`bi bi-three-dots ${style.icon}`}
                                onClick={() => toggleButtons(2)}
                            ></i>
                            {showButtons === 2 && (
                                <div className={style.butao}>
                                    <a href="/editarProduto" className={style.editar}>Editar</a>
                                    <a href="" className={style.delete}>Excluir</a>
                                </div>
                            )}
                        </div>
                        <p>Volksvagem gol</p>
                        <a href="/descricaoProduto"><button>Veja mais</button></a>
                    </div>
                    <div className={style.cardCarros}>
                        <div className={style.imageContainer}>
                            <img src="/images/VW-Gol-lateral.jpg" alt=""/>
                            <i
                                className={`bi bi-three-dots ${style.icon}`}
                                onClick={() => toggleButtons(3)}
                            ></i>
                            {showButtons === 3 && (
                                <div className={style.butao}>
                                    <a href="/editarProduto" className={style.editar}>Editar</a>
                                    <a href="" className={style.delete}>Excluir</a>
                                </div>
                            )}
                        </div>
                        <p>Volksvagem gol</p>
                        <a href="/descricaoProduto"><button>Veja mais</button></a>
                    </div>
                    <div className={style.cardCarros}>
                        <div className={style.imageContainer}>
                            <img src="/images/VW-Gol-lateral.jpg" alt=""/>
                            <i
                                className={`bi bi-three-dots ${style.icon}`}
                                onClick={() => toggleButtons(4)}
                            ></i>
                            {showButtons === 4 && (
                                <div className={style.butao}>
                                    <a href="/editarProduto" className={style.editar}>Editar</a>
                                    <a href="" className={style.delete}>Excluir</a>
                                </div>
                            )}
                        </div>
                        <p>Volksvagem gol</p>
                        <a href="/descricaoProduto"><button>Veja mais</button></a>
                    </div>
                    <div className={style.cardCarros}>
                        <div className={style.imageContainer}>
                            <img src="/images/VW-Gol-lateral.jpg" alt=""/>
                            <i
                                className={`bi bi-three-dots ${style.icon}`}
                                onClick={() => toggleButtons(5)}
                            ></i>
                            {showButtons === 5 && (
                                <div className={style.butao}>
                                    <a href="/editarProduto" className={style.editar}>Editar</a>
                                    <a href="" className={style.delete}>Excluir</a>
                                </div>
                            )}
                        </div>
                        <p>Volksvagem gol</p>
                        <a href="/descricaoProduto"><button>Veja mais</button></a>
                    </div>
                    <div className={style.cardCarros}>
                        <div className={style.imageContainer}>
                            <img src="/images/VW-Gol-lateral.jpg" alt=""/>
                            <i
                                className={`bi bi-three-dots ${style.icon}`}
                                onClick={() => toggleButtons(6)}
                            ></i>
                            {showButtons === 6 && (
                                <div className={style.butao}>
                                    <a href="/editarProduto" className={style.editar}>Editar</a>
                                    <a href="" className={style.delete}>Excluir</a>
                                </div>
                            )}
                        </div>
                        <p>Volksvagem gol</p>
                        <a href="/descricaoProduto"><button>Veja mais</button></a>
                    </div>
                    <div className={style.cardCarros}>
                        <div className={style.imageContainer}>
                            <img src="/images/VW-Gol-lateral.jpg" alt=""/>
                            <i
                                className={`bi bi-three-dots ${style.icon}`}
                                onClick={() => toggleButtons(7)}
                            ></i>
                            {showButtons === 7 && (
                                <div className={style.butao}>
                                    <a href="/editarProduto" className={style.editar}>Editar</a>
                                    <a href="" className={style.delete}>Excluir</a>
                                </div>
                            )}
                        </div>
                        <p>Volksvagem gol</p>
                        <a href="/descricaoProduto"><button>Veja mais</button></a>
                    </div>
                    <div className={style.cardCarros}>
                        <div className={style.imageContainer}>
                            <img src="/images/VW-Gol-lateral.jpg" alt=""/>
                            <i
                                className={`bi bi-three-dots ${style.icon}`}
                                onClick={() => toggleButtons(8)}
                            ></i>
                            {showButtons === 8 && (
                                <div className={style.butao}>
                                    <a href="/editarProduto" className={style.editar}>Editar</a>
                                    <a href="" className={style.delete}>Excluir</a>
                                </div>
                            )}
                        </div>
                        <p>Volksvagem gol</p>
                        <a href="/descricaoProduto"><button>Veja mais</button></a>
                    </div>
                    <div className={style.cardCarros}>
                        <div className={style.imageContainer}>
                            <img src="/images/VW-Gol-lateral.jpg" alt=""/>
                            <i
                                className={`bi bi-three-dots ${style.icon}`}
                                onClick={() => toggleButtons(9)}
                            ></i>
                            {showButtons === 9 && (
                                <div className={style.butao}>
                                    <a href="/editarProduto" className={style.editar}>Editar</a>
                                    <a href="" className={style.delete}>Excluir</a>
                                </div>
                            )}
                        </div>
                        <p>Volksvagem gol</p>
                        <a href="/descricaoProduto"><button>Veja mais</button></a>
                    </div>
                    <div className={style.cardCarros}>
                        <div className={style.imageContainer}>
                            <img src="/images/VW-Gol-lateral.jpg" alt=""/>
                            <i
                                className={`bi bi-three-dots ${style.icon}`}
                                onClick={() => toggleButtons(10)}
                            ></i>
                            {showButtons === 10 && (
                                <div className={style.butao}>
                                    <a href="/editarProduto" className={style.editar}>Editar</a>
                                    <a href="" className={style.delete}>Excluir</a>
                                </div>
                            )}
                        </div>
                        <p>Volksvagem gol</p>
                        <a href="/descricaoProduto"><button>Veja mais</button></a>
                    </div>
                    <div className={style.cardCarros}>
                        <div className={style.imageContainer}>
                            <img src="/images/VW-Gol-lateral.jpg" alt=""/>
                            <i
                                className={`bi bi-three-dots ${style.icon}`}
                                onClick={() => toggleButtons(11)}
                            ></i>
                            {showButtons === 11 && (
                                <div className={style.butao}>
                                    <a href="/editarProduto" className={style.editar}>Editar</a>
                                    <a href="" className={style.delete}>Excluir</a>
                                </div>
                            )}
                        </div>
                        <p>Volksvagem gol</p>
                        <a href="/descricaoProduto"><button>Veja mais</button></a>
                    </div>
                    <div className={style.cardCarros}>
                        <div className={style.imageContainer}>
                            <img src="/images/VW-Gol-lateral.jpg" alt=""/>
                            <i
                                className={`bi bi-three-dots ${style.icon}`}
                                onClick={() => toggleButtons(12)}
                            ></i>
                            {showButtons === 12 && (
                                <div className={style.butao}>
                                    <a href="/editarProduto" className={style.editar}>Editar</a>
                                    <a href="" className={style.delete}>Excluir</a>
                                </div>
                            )}
                        </div>
                        <p>Volksvagem gol</p>
                        <a href="/descricaoProduto"><button>Veja mais</button></a>
                    </div>
                    <div className={style.cardCarros}>
                        <div className={style.imageContainer}>
                            <img src="/images/VW-Gol-lateral.jpg" alt=""/>
                            <i
                                className={`bi bi-three-dots ${style.icon}`}
                                onClick={() => toggleButtons(13)}
                            ></i>
                            {showButtons === 13 && (
                                <div className={style.butao}>
                                    <a href="/editarProduto" className={style.editar}>Editar</a>
                                    <a href="" className={style.delete}>Excluir</a>
                                </div>
                            )}
                        </div>
                        <p>Volksvagem gol</p>
                        <a href="/descricaoProduto"><button>Veja mais</button></a>
                    </div>
                    <div className={style.cardCarros}>
                        <div className={style.imageContainer}>
                            <img src="/images/VW-Gol-lateral.jpg" alt=""/>
                            <i
                                className={`bi bi-three-dots ${style.icon}`}
                                onClick={() => toggleButtons(14)}
                            ></i>
                            {showButtons === 14 && (
                                <div className={style.butao}>
                                    <a href="/editarProduto" className={style.editar}>Editar</a>
                                    <a href="" className={style.delete}>Excluir</a>
                                </div>
                            )}
                        </div>
                        <p>Volksvagem gol</p>
                        <a href="/descricaoProduto"><button>Veja mais</button></a>
                    </div>
                    <div className={style.cardCarros}>
                        <div className={style.imageContainer}>
                            <img src="/images/VW-Gol-lateral.jpg" alt=""/>
                            <i
                                className={`bi bi-three-dots ${style.icon}`}
                                onClick={() => toggleButtons(15)}
                            ></i>
                            {showButtons === 15 && (
                                <div className={style.butao}>
                                    <a href="/editarProduto" className={style.editar}>Editar</a>
                                    <a href="" className={style.delete}>Excluir</a>
                                </div>
                            )}
                        </div>
                        <p>Volksvagem gol</p>
                        <a href="/descricaoProduto"><button>Veja mais</button></a>
                    </div>
                    <div className={style.cardCarros}>
                        <div className={style.imageContainer}>
                            <img src="/images/VW-Gol-lateral.jpg" alt=""/>
                            <i
                                className={`bi bi-three-dots ${style.icon}`}
                                onClick={() => toggleButtons(16)}
                            ></i>
                            {showButtons === 16 && (
                                <div className={style.butao}>
                                    <a href="/editarProduto" className={style.editar}>Editar</a>
                                    <a href="" className={style.delete}>Excluir</a>
                                </div>
                            )}
                        </div>
                        <p>Volksvagem gol</p>
                        <a href="/descricaoProduto"><button>Veja mais</button></a>
                    </div>
                    <div className={style.cardCarros}>
                        <div className={style.imageContainer}>
                            <img src="/images/VW-Gol-lateral.jpg" alt=""/>
                            <i
                                className={`bi bi-three-dots ${style.icon}`}
                                onClick={() => toggleButtons(17)}
                            ></i>
                            {showButtons === 17 && (
                                <div className={style.butao}>
                                    <a href="/editarProduto" className={style.editar}>Editar</a>
                                    <a href="" className={style.delete}>Excluir</a>
                                </div>
                            )}
                        </div>
                        <p>Volksvagem gol</p>
                        <a href="/descricaoProduto"><button>Veja mais</button></a>
                    </div>
                    <div className={style.cardCarros}>
                        <div className={style.imageContainer}>
                            <img src="/images/VW-Gol-lateral.jpg" alt=""/>
                            <i
                                className={`bi bi-three-dots ${style.icon}`}
                                onClick={() => toggleButtons(18)}
                            ></i>
                            {showButtons === 18 && (
                                <div className={style.butao}>
                                    <a href="/editarProduto" className={style.editar}>Editar</a>
                                    <a href="" className={style.delete}>Excluir</a>
                                </div>
                            )}
                        </div>
                        <p>Volksvagem gol</p>
                        <a href="/descricaoProduto"><button>Veja mais</button></a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MeusProdutos;