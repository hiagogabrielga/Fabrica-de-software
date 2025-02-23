'use client'
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Eye, EyeOff } from "lucide-react";
import Image from "next/image";
import styles from './trocarSenha.module.css'

export default function PasswordReset() {
    const router = useRouter();
    const [code, setCode] = useState("");
    const [inputs, setInputs] = useState(["", "", "", "", "", ""]);
    const [step, setStep] = useState(1);
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [showSenha, setShowSenha] = useState(false);
    const [showConfirmarSenha, setShowConfirmarSenha] = useState(false);
    const [email, setEmail] = useState("exemplo@gmail.com");
    const [newEmail, setNewEmail] = useState("");

    useEffect(() => {
        generateCode();
    }, []);

    const generateCode = () => {
        //const generatedCode = Math.floor(100000 + Math.random() * 900000).toString();
        const generatedCode = '000000';
        setCode(generatedCode);
        console.log("Código gerado:", generatedCode);
    };

    const handleInputChange = (index, value) => {
        if (/^\d?$/.test(value)) {
            let newInputs = [...inputs];
            newInputs[index] = value;
            setInputs(newInputs);

            if (value && index < 5) {
                document.getElementById(`input-${index + 1}`).focus();
            } else if (!value && index > 0) {
                document.getElementById(`input-${index - 1}`).focus();
            }
        }
    };

    const handleKeyDown = (index, e) => {
        if (e.key === "Backspace" && !inputs[index] && index > 0) {
            document.getElementById(`input-${index - 1}`).focus();
        }
    };

    const verifyCode = () => {
        if (inputs.join("") === code) {
            setStep(3);
            setError('')
        } else {
            setError("Código incorreto. Tente novamente.");
            setInputs(["", "", "", "", "", ""]);
        }
    };

    const validatePassword = () => {
        const regex = /^(?=.*[A-Z])(?=.*\d{3,})(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
        if (!regex.test(password)) {
            setError("A senha deve ter pelo menos 3 números, 1 caractere especial e 1 letra maiúscula.");
            return;
        }
        if (password !== confirmPassword) {
            setError("As senhas não coincidem.");
            return;
        }
        setStep(4);
        setTimeout(() => router.push("/"), 2000);
    };

    return (
        <div className={styles.bodyTrocarSenha}>
            <div className={styles.campoImagem}>
                <Image src={'/images/logo.png'} width={50} height={50} alt="Logo" />
                <p>Web Cars</p>
            </div>
            <div className={styles.container}>
                {step === 1 && (
                    <>
                        <p className={styles.mensagemCodveric}>Enviamos um código para o e-mail "{email}"</p>
                        <div className={styles.containerInputsVeric}>
                            {inputs.map((val, index) => (
                                <input
                                    key={index}
                                    id={`input-${index}`}
                                    value={val}
                                    onChange={(e) => handleInputChange(index, e.target.value)}
                                    onKeyDown={(e) => handleKeyDown(index, e)}
                                    maxLength={1}
                                    className={styles.inputCodigoverif}
                                />
                            ))}
                        </div>
                        {error && <p className={styles.msgErro}>{error}</p>}
                        <div className={styles.verfContainerBotoes}>
                            <button onClick={() => setStep(2)} className={styles.botoesVerf}>Não tenho acesso ao e-mail</button>
                        </div>
                        <div className={styles.containerBotoesVerfCod}>
                            <button onClick={verifyCode} className={styles.botoesVerf} id={styles.btnVerifCod}>Verificar Código</button>
                        </div>
                    </>
                )}

                {step === 2 && (
                    <>

                        <div className={styles.containerAddOutEmail}>
                            <p className={styles.mensagemCodveric}>Digite um novo e-mail para receber o código:</p>
                            <input
                                type="email"
                                placeholder="Novo e-mail"
                                value={newEmail}
                                onChange={(e) => setNewEmail(e.target.value)}
                                className={styles.inputEmail}
                            />
                            <button onClick={() => { setEmail(newEmail); generateCode(); setStep(1); }} className={styles.botoesVerf}>Enviar Código</button>
                        </div>

                    </>
                )}

                {step === 3 && (
                    <>
                    <div className={styles.containerRedSenha}>
                    <p className={styles.mensagemCodveric}>Redefinir Senha</p>
                        <div className={styles.inputPass}>
                            <input
                                type={showSenha ? 'text' : 'password'}
                                placeholder="Nova senha"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <button onClick={() => setShowSenha(!showSenha)}>
                                {showSenha ? <Eye /> : <EyeOff />}
                            </button>
                        </div>
                        <div className={styles.inputPass}>
                            <input
                                type={showConfirmarSenha ? 'text' : 'password'}
                                placeholder="Confirme a senha"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                            <button onClick={() => setShowConfirmarSenha(!showConfirmarSenha)}>
                                {showConfirmarSenha ? <Eye /> : <EyeOff />}
                            </button>
                        </div>
                        {error && <p className={styles.msgErro}>{error}</p>}
                        <button onClick={validatePassword} className={styles.botoesVerf}>Redefinir Senha</button>
                    </div>
                    </>
                )}

                {step === 4 && <p className={styles.msgOk}>Senha redefinida com sucesso! Redirecionando para a tela principal...</p>}
            </div>
        </div>
    );
}
