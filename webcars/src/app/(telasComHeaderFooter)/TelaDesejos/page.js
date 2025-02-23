import styled from "./listaDesejos.module.css";

const carItens = [
    {
        id: 1,
        imagem: '/images/VW-Gol-lateral.jpg',
        desc: "volkswagen gol",
    },
    {
        id: 2,
        imagem: '/images/VW-Gol-lateral.jpg',
        desc: "volkswagen gol",
    },
    {
        id: 3,
        imagem: '/images/VW-Gol-lateral.jpg',
        desc: "volkswagen gol",
    },
    {
        id: 4,
        imagem: '/images/VW-Gol-lateral.jpg',
        desc: "volkswagen gol",
    },
    {
        id: 5,
        imagem: '/images/VW-Gol-lateral.jpg',
        desc: "volkswagen gol",
    },
    {
        id: 6,
        imagem: '/images/VW-Gol-lateral.jpg',
        desc: "volkswagen gol",
    },
    {
        id: 7,
        imagem: '/images/VW-Gol-lateral.jpg',
        desc: "volkswagen gol",
    },
    {
        id: 8,
        imagem: '/images/VW-Gol-lateral.jpg',
        desc: "volkswagen gol",
    },
    {
        id: 9,
        imagem: '/images/VW-Gol-lateral.jpg',
        desc: "volkswagen gol",
    },

]

export default function ListaDesejos() {
    return (
        <div className={styled.container}>
            <button className={styled.btnVoltar}>Voltar</button>

            <div className={styled.title}>
                <h1>Lista de Desejos</h1>
                <button className={styled.btnCompartilhar}>Compartilhar</button>
            </div>
            <div className={styled.container}>
                <div className={styled.cardsContainer}>
                    <div className={styled.cardAdicionar}>
                        <Image src={AddIcon} alt="plus" width={55} height={55} />
                        <button className={styled.button}>Adicionar Carro</button>
                    </div>

                    {carItens.map((item) => {
                        return (
                            <div className={styled.cards} key={item.id}>
                                <Image src={item.imagem} alt="" width={280} height={280} />
                                <p>{item.desc}</p>
                                <button className={styled.button}>Veja mais</button>
                            </div>

                        )
                    })}

                </div>
            </div>
        </div>
    )
}