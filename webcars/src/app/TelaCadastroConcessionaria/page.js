"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from './cadastroConcessionaria.module.css';
import Image from "next/image";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    cnpj: "",
    telefone: "",
    cep: "",
    rua: "",
    bairro: "",
    cidade: "",
    estado: "",
    senha: "",
    confirmarSenha: "",
  });
  const [errors, setErrors] = useState({});
  const [cnpjValido, setCnpjValido] = useState(false);
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordChek, setShowPasswordChek] = useState(false);

  // Função para formatar CNPJ
  const formatCNPJ = (value) => {
    return value
      .replace(/\D/g, "")
      .replace(/^(\d{2})(\d)/, "$1.$2")
      .replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3")
      .replace(/\.(\d{3})(\d)/, ".$1/$2")
      .replace(/(\d{4})(\d)/, "$1-$2")
      .substring(0, 18);
  };

  // Função para validar CNPJ
  const validateCNPJ = (cnpj) => {
    // Remove caracteres não numéricos
    cnpj = cnpj.replace(/\D/g, "");
  
    // Verifica se o CNPJ tem 14 dígitos e não são todos iguais
    if (cnpj.length !== 14 || /^(\d)\1{13}$/.test(cnpj)) return false;
  
    // Função para calcular o dígito verificador
    const calcDigit = (slice, weights) => {
      const sum = slice.split("").reduce((acc, curr, idx) => acc + parseInt(curr) * weights[idx], 0);
      const mod = sum % 11;
      return mod < 2 ? 0 : 11 - mod;
    };
  
    // Pesos para o primeiro dígito verificador
    const weights1 = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
    // Pesos para o segundo dígito verificador
    const weights2 = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
  
    // Calcula o primeiro dígito verificador
    const firstDigit = calcDigit(cnpj.slice(0, 12), weights1);
    // Calcula o segundo dígito verificador
    const secondDigit = calcDigit(cnpj.slice(0, 13), weights2);
  
    // Verifica se os dígitos calculados são iguais aos dígitos do CNPJ
    return cnpj[12] == firstDigit && cnpj[13] == secondDigit;
  };

  // Função para formatar telefone
  const formatTelefone = (value) => {
    return value
      .replace(/\D/g, "")
      .replace(/(\d{2})(\d)/, "($1) $2")
      .replace(/(\d{5})(\d{1,4})$/, "$1-$2");
  };

  // Função para formatar CEP
  const formatCEP = (value) => {
    return value
      .replace(/\D/g, "")
      .replace(/^(\d{5})(\d)/, "$1-$2")
      .substring(0, 9);
  };

  // Função para buscar endereço pelo CEP usando ViaCEP
  const buscarEnderecoPorCEP = async (cep) => {
    cep = cep.replace(/\D/g, "");
    if (cep.length === 8) {
      try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const data = await response.json();
        if (!data.erro) {
          setFormData((prev) => ({
            ...prev,
            rua: data.logradouro,
            bairro: data.bairro,
            cidade: data.localidade,
            estado: data.uf,
          }));
        } else {
          setErrors((prev) => ({ ...prev, cep: "CEP não encontrado" }));
        }
      } catch (error) {
        console.error("Erro ao buscar CEP:", error);
        setErrors((prev) => ({ ...prev, cep: "Erro ao buscar CEP" }));
      }
    }
  };

  // Função para validar o formulário
  const validate = () => {
    let newErrors = {};

    if (!formData.nome) newErrors.nome = "Nome é obrigatório";
    if (!formData.email.includes("@")) newErrors.email = "Email inválido";
    if (!validateCNPJ(formData.cnpj)) newErrors.cnpj = "CNPJ inválido";
    if (formData.telefone.replace(/\D/g, "").length !== 11) newErrors.telefone = "Telefone inválido";
    if (formData.cep.replace(/\D/g, "").length !== 8) newErrors.cep = "CEP inválido";
    if (!/(?=.*[A-Z])(?=.*\d{3,})(?=.*[!@#$%^&*])/.test(formData.senha))
      newErrors.senha = "A senha deve conter pelo menos 3 números, 1 caractere especial e 1 letra maiúscula";
    if (formData.senha !== formData.confirmarSenha)
      newErrors.confirmarSenha = "As senhas não coincidem";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Função para enviar o formulário
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      router.push("/");
    }
  };

  // Função para gerar placeholder dinâmico
  const getPlaceholder = (label) => {
    return `Digite seu ${label.toLowerCase()}`;
  };

  // Função para verificar CNPJ em tempo real
  const handleCNPJChange = (e) => {
    const cnpjFormatado = formatCNPJ(e.target.value);
    setFormData({ ...formData, cnpj: cnpjFormatado });
    setCnpjValido(validateCNPJ(cnpjFormatado));
  };

  // Função para lidar com mudanças no CEP
  const handleCEPChange = (e) => {
    const cepFormatado = formatCEP(e.target.value);
    setFormData({ ...formData, cep: cepFormatado });
    buscarEnderecoPorCEP(cepFormatado);
  };

  return (
    <div className={styles.containerCadastro}>
      <div className={styles.leftRed}>
        <div className={styles.conteudoLeftRed}>
          <h2>Bem-vindo</h2>
          <h3>Crie sua conta agora mesmo.</h3>
        </div>
      </div>
      <div className={styles.conteudoCadastro}>
        <div className={styles.campoImagem}>
          <Image src={'/images/logo.png'} width={50} height={50} alt="Logo" />
          <p>Web Cars</p>
        </div>
        <div className={styles.containerFormulario}>
          <h2>Crie sua conta</h2>
          <form onSubmit={handleSubmit} className={styles.formulario}>
            <div className={styles.conteudoFormulario}>
              {/* Nome */}
              <div className={styles.containerInput}>
                <label>Nome:</label>
                <input
                  type="text"
                  placeholder={getPlaceholder("Nome")}
                  value={formData.nome}
                  onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                  className={styles.inputCadastro}
                />
                {errors.nome && <span className={styles.error}>{errors.nome}</span>}
              </div>

              {/* Email */}
              <div className={styles.containerInput}>
                <label>Email:</label>
                <input
                  type="email"
                  placeholder={getPlaceholder("Email")}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={styles.inputCadastro}
                />
                {errors.email && <span className={styles.error}>{errors.email}</span>}
              </div>

              {/* CNPJ */}
              <div className={styles.containerInput}>
                <label>CNPJ:</label>
                <input
                  type="text"
                  placeholder={getPlaceholder("CNPJ")}
                  value={formData.cnpj}
                  onChange={handleCNPJChange}
                  maxLength="18"
                  className={styles.inputCadastro}
                />
                {errors.cnpj && <span className={styles.error}>{errors.cnpj}</span>}
                {formData.cnpj && (
                  <span className={cnpjValido ? styles.success : styles.error}>
                    {cnpjValido ? "CNPJ válido" : "CNPJ inválido"}
                  </span>
                )}
              </div>

              {/* Telefone */}
              <div className={styles.containerInput}>
                <label>Telefone:</label>
                <input
                  type="text"
                  placeholder={getPlaceholder("Telefone")}
                  value={formData.telefone}
                  onChange={(e) => setFormData({ ...formData, telefone: formatTelefone(e.target.value) })}
                  maxLength="15"
                  className={styles.inputCadastro}
                />
                {errors.telefone && <span className={styles.error}>{errors.telefone}</span>}
              </div>

              {/* CEP */}
              <div className={styles.containerInput}>
                <label>CEP:</label>
                <input
                  type="text"
                  placeholder={getPlaceholder("CEP")}
                  value={formData.cep}
                  onChange={handleCEPChange}
                  maxLength="9"
                  className={styles.inputCadastro}
                />
                {errors.cep && <span className={styles.error}>{errors.cep}</span>}
              </div>

              <div className={styles.containerTwoButtons}>
                {/* Rua */}
                <div className={styles.containerInput}>
                  <label>Rua:</label>
                  <input
                    type="text"
                    placeholder={getPlaceholder("Rua")}
                    value={formData.rua}
                    onChange={(e) => setFormData({ ...formData, rua: e.target.value })}
                    className={styles.inputCadastro}
                  />
                </div>

                {/* Bairro */}
                <div className={styles.containerInput}>
                  <label>Bairro:</label>
                  <input
                    type="text"
                    placeholder={getPlaceholder("Bairro")}
                    value={formData.bairro}
                    onChange={(e) => setFormData({ ...formData, bairro: e.target.value })}
                    className={styles.inputCadastro}
                  />
                </div>
              </div>
              <div className={styles.containerTwoButtons}>
                <div className={styles.containerInput}>
                  <label>Cidade:</label>
                  <input
                    type="text"
                    placeholder={getPlaceholder("Cidade")}
                    value={formData.cidade}
                    onChange={(e) => setFormData({ ...formData, cidade: e.target.value })}
                    className={styles.inputCadastro}
                  />
                </div>

                <div className={styles.containerInput}>
                  <label>Estado:</label>
                  <input
                    type="text"
                    placeholder={getPlaceholder("Estado")}
                    value={formData.estado}
                    onChange={(e) => setFormData({ ...formData, estado: e.target.value })}
                    className={styles.inputCadastro}
                  />
                </div>
              </div>


              {/* Senha */}
              <div className={styles.containerInput}>
                <label>Criar senha:</label>
                <div className={styles.containerInputSenha}>
                  <input
                    type={showPassword ? 'text' : "password"}
                    placeholder={getPlaceholder("Senha")}
                    value={formData.senha}
                    onChange={(e) => setFormData({ ...formData, senha: e.target.value })}
                  />
                  <button type="button" onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <Eye /> : <EyeOff />}
                  </button>
                </div>
                {errors.senha && <span className={styles.error}>{errors.senha}</span>}
              </div>

              {/* Confirmar Senha */}
              <div className={styles.containerInput}>
                <label>Confirmar senha:</label>
                <div className={styles.containerInputSenha}>
                  <input
                    type={showPasswordChek ? 'text' : "password"}
                    placeholder={getPlaceholder("Confirmar Senha")}
                    value={formData.confirmarSenha}
                    onChange={(e) => setFormData({ ...formData, confirmarSenha: e.target.value })}
                  />
                  <button type="button" onClick={() => setShowPasswordChek(!showPasswordChek)}>
                    {showPasswordChek ? <Eye /> : <EyeOff />}
                  </button>
                </div>
                {errors.confirmarSenha && <span className={styles.error}>{errors.confirmarSenha}</span>}
              </div>

              {/* Botão de Envio e Links */}
              <div className={styles.btnContainer}>
                <button type="submit" className={styles.buttonSubmit}>Criar Conta</button>
                <div className={styles.containerLinks}>
                  <Link href='/TelaCadastroCliente' className={styles.btnConcessionaria}>Criar conta como cliente</Link>
                  <Link href='/telaLogin' className={styles.btnConcessionaria}>Faça login</Link>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}