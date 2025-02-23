'use client';

import React, { useState, useEffect } from "react";
import Dropdown from "@/components/funcoesDropdown/DropDown.js";
import DropdownEspecial from "@/components/funcoesDropdown/DropDownEspecial.js";
import controleDadosImagem from "@/components/funcoesDropdown/controleDeDadosImagem.js";
import DropdownSimulado from "@/components/funcoesDropdown/dropDownCodicao.js";
import Link from 'next/link'
import styles from "./editarProduto.module.css"
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
  const [valorValor, setValor] = useState();
  const [valorDetalhes, setDetalhes] = useState();
  const [valorQuilometragem, setQuilometragem] = useState();
  const [errorMessage, setErrorMessage] = useState('');

  const [valorImagens, setImagens] = useState([]);
  const [imagensTemporarias, setImagensTemporarias] = useState([]); // Array secundário para armazenar imagens temporariamente
  const [imagePreviews, setImagePreviews] = useState([]);

  const [valorContatoNumeroDeTelefone, setValorContatoNumeroDeTelefone] = useState();
  const [valorContatoEmailEndereco, setValorContatoEmailEndereco] = useState();

  const controleImagens = (event) => {
    const files = Array.from(event.target.files);
    setImagensTemporarias(files); // Armazena as imagens no array temporário
    handleFileChange(files);
  };

  const [showMensagem, setShowMensagem] = useState(false)

  const handleFileChange = (files) => {
    if (files.length) {
      const newPreviews = [];
      files.forEach((file) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          newPreviews.push(reader.result);
          if (newPreviews.length === files.length) {
            setImagePreviews((prevPreviews) => [...prevPreviews, ...newPreviews]);
          }
        };
        reader.readAsDataURL(file);
      });
    }
  };

  const excluirImagem = (index) => {
    setImagensTemporarias((prevImagens) => {
      const newImages = [...prevImagens];
      newImages.splice(index, 1);
      return newImages;
    });

    setImagePreviews((prevPreviews) => {
      const newPreviews = [...prevPreviews];
      newPreviews.splice(index, 1);
      return newPreviews;
    });
  };

  const [exibirData, setExibirData] = useState(false);

  const apresentarDataVencimento = (event) => {
    setExibirData(event.target.checked);
    if (event.target.checked === false) {
      setDataIpva(null);
    }
  };

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
                <label className={styles.label}>Nome de exibição</label>
                <input
                  type="text"
                  name="nome"
                  onChange={(e) => setNome(e.target.value)}
                  placeholder="Ex: Volkswagen Gol vermelho 2016 Usado"
                />
              </div>
            </div>

            <div className={styles.campoPreenchimentoimagens}>
              <label className={styles.label}>Imagens do produto</label>
              <input
                id="file-upload"
                type="file"
                name="file-upload"
                onChange={(e) => controleImagens(e)}
                multiple
                accept="image/*"
                className={styles.inputFilesImagens}
              />
              <div>
                <div id={styles.campoImagens} className="image-preview-area">
                  <label id={styles.iconeAdicionarImagem} htmlFor="file-upload">
                    <svg xmlns="http://www.w3.org/2000/svg" width="70" height="50" fill="currentColor" className="bi bi-file-earmark-plus-fill" viewBox="0 0 16 16">
                      <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0M9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1M8.5 7v1.5H10a.5.5 0 0 1 0 1H8.5V11a.5.5 0 0 1-1 0V9.5H6a.5.5 0 0 1 0-1h1.5V7a.5.5 0 0 1 1 0" />
                    </svg>
                  </label>
                  {imagePreviews.map((preview, index) => (
                    <div key={`cardImagem${index}`} className={styles.cardImagem}>
                      <input
                        type="button"
                        key={`botaoTirarImagem${index}`}
                        onClick={() => excluirImagem(index)}
                        className={styles.botaoTirarImagem}
                        value="✖"
                      />
                      <div key={`campoImagem${index}`}>
                        <img
                          key={`imagem${index}`}
                          src={preview}
                          alt={`Pré-visualização ${index + 1}`}
                          className={styles.imagemVeiculo}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {errorMessage && <div className="error-message">{errorMessage}</div>}
            </div>

            <div className={styles.campoDetalhes}>
              <label className={styles.label}>Detalhes</label>
              <textarea
                name="detalhes"
                cols="30"
                rows="10"
                onChange={(e) => setDetalhes(e.target.value)}
                placeholder="Adicione os detalhes sobre o seu produto aqui!"
              />
            </div>

            <div className={styles.filhoCampoUmaColuna}>
              <div className={styles.campodePrenchimento}>
                <label className={styles.label}>Valor do produto</label>
                <input
                  type="text"
                  name="valor"
                  onBlur={(e) => formatarValorMonetario(e.target)}
                  onChange={(e) => setValor(e.target.value)}
                  placeholder="Ex: R$ 150.000,00"
                />
              </div>
            </div>

            <div className={styles.campoContato}>
              <label className={styles.label}>
                Contatos para negociações
              </label>
              <div className={styles.campoOpcoesContato}>
                <div className={styles.opcoesContato}>
                  <div className={styles.labelOpcoescontato}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-whatsapp" viewBox="0 0 16 16">
                      <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                    </svg>
                    <label className={styles.label}>
                      Número
                    </label>
                    <input type="text" onChange={(e) => setValorContatoNumeroDeTelefone(e.target.value)} />
                  </div>

                  <input
                    type="checkbox"
                    name="contatoNumero"
                    checked={checkboxValues.contatoNumero}
                    onChange={handleCheckboxChange}
                  />
                </div>
                <div className={styles.opcoesContato}>
                  <div className={styles.labelOpcoescontato}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
                      <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                    </svg>
                    <label className={styles.label}>
                      E-mail
                    </label>
                    <input type="text" onChange={(e) => setValorContatoEmailEndereco(e.target.value)} />
                  </div>

                  <input
                    type="checkbox"
                    name="contatoEmail"
                    checked={checkboxValues.contatoEmail}
                    onChange={handleCheckboxChange}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.campoBotoes}>
          <button id={styles.btnAdicionarProduto} onClick={() => setShowMensagem(!showMensagem)} type="button">Excluir produto</button>
          <button id={styles.btnAdicionarProduto} onClick={() => setShowMensagem(!showMensagem)} type="button">Salvar alterações</button>
        </div>

      </form >
      {
        showMensagem &&
        <div className={styles.overlay}>
          <div className={styles.containerConclusao}>
            <div className={styles.containerMensagemConclusao}>
              <p>ALTERAÇÕES FEITAS COM SUCESSO!</p>
            </div>
            <div className={styles.containeBotao}>
              <button className={styles.botaoConclusao}>
                <Link href='/' className={styles.conteudoBotaoConclusao}>
                  <div className={styles.arrowEtexto}>
                    <ArrowLeft size={20} />
                    <p>
                      Voltar a tela inicial
                    </p>
                  </div>
                </Link>
              </button>
              <button className={styles.botaoConclusao} onClick={reload}>
                <Link href='/meusProdutos' className={styles.conteudoBotaoConclusao}>
                  <div className={styles.arrowEtexto}>
                    <ArrowLeft size={20} />
                    <p>
                      Fazer mais alterações
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
}