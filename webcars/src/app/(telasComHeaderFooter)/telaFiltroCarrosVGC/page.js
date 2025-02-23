"use client";
import style from "./filtro.module.css";
import { useState } from "react";
import Image from "next/image"; 

// Componente FilterBox (para os filtros de marca, modelo, etc.)
const FilterBox = ({ label, options }) => {
  return (
    <div className={style.filterBox}>
      <label htmlFor="search">{label}</label>
      <input type="text" className={style.search} placeholder="Pesquisar..." />
      <div className={style.checkboxContainer}>
        {options.map((option, index) => (
          <label key={index}>
            <input type="checkbox" /> {option}
          </label>
        ))}
      </div>
    </div>
  );
};

// Componente RangeInput (para os inputs de ano, preço, quilometragem)
const RangeInput = ({ label, placeholderFrom, placeholderTo, exampleFrom, exampleTo }) => {
  return (
    <div className={style.anoContainer}>
      <label className={style.ano}>{label}</label>
      <div className={style.anoInputs}>
        <div className={style.inputGroup}>
          <input type="number" min="0" placeholder={placeholderFrom} />
          <span className={style.example}>{exampleFrom}</span>
        </div>
        <div className={style.inputGroup}>
          <input type="number" min="0" placeholder={placeholderTo} />
          <span className={style.example}>{exampleTo}</span>
        </div>
      </div>
    </div>
  );
};

// Componente CarCard (para os cards dos carros)
const CarCard = ({ image, name, link }) => {
  return (
    <div className={style.cardCarros}>
      <Image
        src={`/images/${image}`} 
        alt={name}
        width={200} 
        height={120} 
        className={style.carImage} 
      />
      <p>{name}</p>
      <button>
        <a href={link}>veja mais</a>
      </button>
    </div>
  );
};

// Componente Principal SemiNovos
const SemiNovos = () => {
  const marcas = [
    'Audi', 'BMW', 'Chevrolet', 'Fiat', 'Ford', 'Honda', 'Hyundai', 'Jeep', 'Kia',
    'Mercedes-Benz', 'Nissan', 'Toyota', 'Volkswagen', 'Volvo', 'Renault'
  ];

  const modelos = [
    'Corolla', 'Civic', 'Golf', 'Onix', 'Palio', 'HB20', 'Compass', 'Tucson', 'Amarok',
    'Cruze', 'Focus', 'Polo', 'Sandero', 'Ka', 'Jetta'
  ];

  const combustiveis = ['Álcool', 'Gasolina', 'Elétrico', 'Diesel', 'Etanol'];

  // Estado para controlar o número de cards
  const [numeroDeCards, setNumeroDeCards] = useState(25); 

  // Dados dos carros
  const carros = Array(numeroDeCards).fill({
    image: 'VW-Gol-lateral.jpg',
    name: 'Volksvagem gol',
    link: '#'
  });

  return (
    <div>
      <h1 className={style.semiNovos}>Carros Seminovos</h1>
      <div className={style.mainContainer}>
        <div className={style.filtros}>
          <FilterBox label="Marca" options={marcas} />
          <hr />
          <FilterBox label="Modelo" options={modelos} />
          <hr />
          <RangeInput
            label="Ano"
            placeholderFrom="de"
            placeholderTo="até"
            exampleFrom="ex:2020"
            exampleTo="ex:2024"
          />
          <hr />
          <RangeInput
            label="Preço"
            placeholderFrom="de"
            placeholderTo="até"
            exampleFrom="ex:R$ 10.000"
            exampleTo="ex:R$ 50.000"
          />
          <hr />
          <RangeInput
            label="Quilometragem"
            placeholderFrom="de"
            placeholderTo="até"
            exampleFrom="ex:5.000 Km"
            exampleTo="ex:20.000 Km"
          />
          <hr />
          <FilterBox label="Combustível" options={combustiveis} />
        </div>
        <div className={style.fundoCarro}>
          {carros.map((carro, index) => (
            <CarCard key={index} image={carro.image} name={carro.name} link={carro.link} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SemiNovos;