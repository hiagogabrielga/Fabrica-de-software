'use client';

import React, { useState, useEffect } from "react";
import Dropdown from "@/components/funcoesDropdown/DropDown.js";
import DropdownEspecial from "@/components/funcoesDropdown/DropDownEspecial.js";
import controleDadosImagem from "@/components/funcoesDropdown/controleDeDadosImagem.js";
import DropdownSimulado from "@/components/funcoesDropdown/dropDownCodicao.js";
import Link from 'next/link'
import styles from "./adicionarFiltro.module.css"
import { formatarQuilometragem, validarAno, formatarValorMonetario, validarAnoCalendario } from "@/components/funcoesDropdown/controleDeDadosSimples.js";
import { ArrowLeft } from "lucide-react";
export default function AdicionarProduto() {
  const [dropdownAberto, setDropdownAberto] = useState("");
  const [valorCor, setCor] = useState();
  const [valorMarca, setMarca] = useState();
  const [valorModelo, setModelo] = useState();
  const [valorAro, setAro] = useState();
  const [valorCondicao, setCondicao] = useState();
  const [valorCategoria, setCategoria] = useState();
  const [valorCombustivel, setCombustivel] = useState();
  const [valorAno, setAno] = useState();
  const [valorDataCompra, setDataCompra] = useState();
  const [valorNome, setNome] = useState();
  const [valorCambio, setCambio] = useState();
  const [checkboxValues, setCheckboxValues] = useState({
    ipva: false,
    blindagem: false,
    contatoNumero: false,
    contatoEmail: false,
  });
  const [valorDataIpva, setDataIpva] = useState();
  const [valorValorMaximo, setValorMaximo] = useState();
  const [valorValorMinimo, setValorMinimo] = useState();
  const [valorQuilometragem, setQuilometragem] = useState();

  const [exibirData, setExibirData] = useState(false);

  const [showMensagem, setShowMensagem] = useState(false)

  const apresentarDataVencimento = (event) => {
    setExibirData(event.target.checked);
    if (event.target.checked === false) {
      setDataIpva(null);
    }
  }

  const handleSubmit = async (e) => {
    /*e.preventDefault();
 
    const imagensProcessadas = await controleDadosImagem(imagensTemporarias);
 
    const selectedValues = {
      marca: valorMarca,
      aro: valorAro,
      modelo: valorModelo,
      combustivel: valorCombustivel,
      condicao: valorCondicao,
      categoria: valorCategoria,
      cor: valorCor,
      ano: valorAno,
      valor: valorValor,
      imagens: imagensProcessadas,
      blindagem: valorBlindagem,
      dataCompra: valorDataCompra,
      nome: valorNome,
      ipva: valorIpva,
      dataIpva: valorDataIpva,
      detalhes: valorDetalhes,
      contatoEmail: valorContatoEmail,
      contatoNumero: valorContatoNumero,
      quilometragem: valorQuilometragem,
      cambio: valorCambio,
      numeroTelefone: valorContatoNumeroDeTelefone,
      enderecoEmail: valorContatoEmailEndereco,
    };
 
    try {
      await axios.post(`http://localhost:8080/api/adicionar/adicionarCarro?nomeAnuncio=${selectedValues.nome}&anoCarro=${selectedValues.ano}&condicaoCarro=${selectedValues.condicao}&valorCarro=${selectedValues.valor}&ipvaPago=${selectedValues.ipva}&dataIpva=${selectedValues.dataIpva}&dataCompra=${selectedValues.dataCompra}&detalhesVeiculo=${selectedValues.detalhes}&blindagem=${selectedValues.blindagem}&idCor=${selectedValues.cor}&idAro=${selectedValues.aro}&idCategoria=${selectedValues.categoria}&idMarca=${selectedValues.marca}&idModelo=${selectedValues.modelo}&idCombustivel=${selectedValues.combustivel}&idCambio=${selectedValues.cambio}&idConcessionaria=1&nomeImagens=${selectedValues.imagens}`)
 
      alert("Dados enviado com sucesso!")
    } catch (error) {
      console.error("erro ao enviar dados" + error)
    }*/
  };

  const reload = () => {
    window.location.reload();
  };

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCheckboxValues((prevValues) => ({
      ...prevValues,
      [name]: checked,
    }));
  };

  const valorIpva = checkboxValues.ipva ? '1' : '0';
  const valorBlindagem = checkboxValues.blindagem ? '1' : '0';
  const valorContatoEmail = checkboxValues.contatoEmail ? '1' : '0';
  const valorContatoNumero = checkboxValues.contatoNumero ? '1' : '0';

  const handleValorSelecionado = (label, valor) => {
    switch (label) {
      case "marca":
        setMarca(valor);
        break;
      case "aro":
        setAro(valor);
        break;
      case "modelo":
        setModelo(valor);
        break;
      case "combustivel":
        setCombustivel(valor);
        break;
      case "categoria":
        setCategoria(valor);
        break;
      case "cor":
        setCor(valor);
        break;
      case "condicao":
        setCondicao(valor);
        break;
      case "cambio":
        setCambio(valor);
        break;
      default:
        console.warn("Label não reconhecido:", label);
        break;
    }
  };

  useEffect(() => {
    if (showMensagem) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [showMensagem]);

  return (
    <div className={styles.mainAdicionarVeiculo}>
      <form onSubmit={handleSubmit}>
        <div className={styles.fundoCampoAdicionarVeiculo}>
          <div className={styles.campoDuasColunas}>
            <Dropdown
              label="marca"
              onValorSelecionado={handleValorSelecionado}
              dropdownAberto={dropdownAberto}
              setDropdownAberto={setDropdownAberto}
            />

            <Dropdown
              label="categoria"
              onValorSelecionado={handleValorSelecionado}
              dropdownAberto={dropdownAberto}
              setDropdownAberto={setDropdownAberto}
            />

            <DropdownEspecial
              label="modelo"
              valorMarca={valorMarca}
              valorCategoria={valorCategoria}
              onValorSelecionado={handleValorSelecionado}
              dropdownAberto={dropdownAberto}
              setDropdownAberto={setDropdownAberto}
            />

            <Dropdown
              label="aro"
              onValorSelecionado={handleValorSelecionado}
              dropdownAberto={dropdownAberto}
              setDropdownAberto={setDropdownAberto}
            />

            <Dropdown
              label="combustivel"
              onValorSelecionado={handleValorSelecionado}
              dropdownAberto={dropdownAberto}
              setDropdownAberto={setDropdownAberto}
            />

            <Dropdown
              label="cor"
              onValorSelecionado={handleValorSelecionado}
              dropdownAberto={dropdownAberto}
              setDropdownAberto={setDropdownAberto}
            />

            <Dropdown
              label="cambio"
              onValorSelecionado={handleValorSelecionado}
              dropdownAberto={dropdownAberto}
              setDropdownAberto={setDropdownAberto}
            />

            <DropdownSimulado
              label="condicao"
              onValorSelecionado={handleValorSelecionado}
              dropdownAberto={dropdownAberto}
              setDropdownAberto={setDropdownAberto}
            />

            <div className={styles.filhoCampoDuasColunas}>
              <div className={styles.campodePrenchimento}>
                <label className={styles.label}>Ano</label>
                <input
                  type="number"
                  name="ano"
                  onBlur={(e) => validarAno(e.target)}
                  onChange={(e) => setAno(e.target.value)}
                  placeholder="Ex: 2007"
                />
              </div>
            </div>

            <div className={styles.filhoCampoDuasColunas}>
              <div className={styles.campodePrenchimento}>
                <label className={styles.label}>Data compra</label>
                <input
                  id={styles.campoInputDataCompra}
                  type="date"
                  name="dataCompra"
                  onBlur={(e) => validarAnoCalendario(e.target)}
                  onChange={(e) => setDataCompra(e.target.value)}
                />
              </div>
            </div>

            <div className={styles.filhoCampoUmaColuna}>
              <div className={styles.campodePrenchimento}>
                <label className={styles.label}>Quilometragem</label>
                <input
                  type="text"
                  name="quilometragem"
                  onBlur={(e) => formatarQuilometragem(e.target)}
                  onChange={(e) => { setQuilometragem(e.target.value) }}
                  placeholder="Ex: 1.200,00 Km"
                />
              </div>
            </div>

            <div className={styles.filhoCampoDuasColunas}>
              <div className={styles.campodePrenchimento}>
                <label className={styles.label}>IPVA</label>
                <input
                  type="checkbox"
                  id="ipva"
                  name="ipva"
                  checked={checkboxValues.ipva}
                  onChange={(e) => { apresentarDataVencimento(e), handleCheckboxChange(e) }}
                  className={styles.checkbox}
                />
                <label htmlFor="ipva" className={styles.labelChekBox}></label>
              </div>
            </div>

            <div className={styles.filhoCampoDuasColunas}>
              <div className={styles.campodePrenchimento}>
                <label className={styles.label}>Blindagem</label>
                <input
                  type="checkbox"
                  id="blindagem"
                  name="blindagem"
                  checked={checkboxValues.blindagem}
                  onChange={handleCheckboxChange}
                  className={styles.checkbox}
                />
                <label htmlFor="blindagem" className={styles.labelChekBox}></label>
              </div>
            </div>
          </div>

          <div className={styles.campoUmaColuna}>
            {exibirData && (
              <div className={styles.filhoCampoUmaColuna}>
                <div className={styles.campodePrenchimento}>
                  <label className={styles.label}>Data IPVA</label>
                  <input
                    type="date"
                    name="dataIpva"
                    onBlur={(e) => validarAnoCalendario(e.target)}
                    onChange={(e) => setDataIpva(e.target.value)}
                  />
                </div>
              </div>
            )}
            <div className={styles.filhoCampoUmaColuna}>
              <div className={styles.campodePrenchimento}>
                <label className={styles.label}>Nome do filtro</label>
                <input
                  type="text"
                  name="nome"
                  onChange={(e) => setNome(e.target.value)}
                  placeholder="Ex: Volkswagen Gol vermelho 2016 Usado"
                />
              </div>
            </div>

            <div className={styles.filhoCampoUmaColuna}>
              <div className={styles.campodePrenchimento}>
                <label className={styles.label}>Valor mínimo</label>
                <input
                  type="text"
                  name="valor"
                  onBlur={(e) => formatarValorMonetario(e.target)}
                  onChange={(e) => setValorMinimo(e.target.value)}
                  placeholder="Ex: R$ 150.000,00"
                />
              </div>
            </div>

            <div className={styles.filhoCampoUmaColuna}>
              <div className={styles.campodePrenchimento}>
                <label className={styles.label}>Valor máximo</label>
                <input
                  type="text"
                  name="valor"
                  onBlur={(e) => formatarValorMonetario(e.target)}
                  onChange={(e) => setValorMaximo(e.target.value)}
                  placeholder="Ex: R$ 990.000,00"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.campoBotoes}>
          <button id={styles.btnAdicionarProduto} onClick={() => setShowMensagem(!showMensagem)} type="button">Criar alerta para esse filtro</button>
        </div>

      </form >
      {
        showMensagem &&
        <div className={styles.overlay}>
          <div className={styles.containerConclusao}>
            <div className={styles.containerMensagemConclusao}>
              <p>FILTRO SALVO COM SUCESSO!</p>
            </div>
            <div className={styles.containeBotao}>
              <button className={styles.botaoConclusao}>
                <Link href='/' className={styles.conteudoBotaoConclusao}>
                  <div className={styles.arrowEtexto}>
                    <ArrowLeft size={20} />
                    <p>
                      Voltar a tela inical
                    </p>
                  </div>
                </Link>
              </button>
              <button className={styles.botaoConclusao} onClick={reload}>
                <Link href='/adicionarAlerta' className={styles.conteudoBotaoConclusao}>
                  <div className={styles.arrowEtexto}>
                    <ArrowLeft size={20} />
                    <p>
                      Adicionar mais um alerta
                    </p>
                  </div>
                </Link>

              </button>
            </div>
          </div>
        </div>
      }
    </div >
  );
};