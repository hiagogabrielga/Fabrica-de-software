'use client'
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import Image from "next/image";
import Link from 'next/link';
import { useRouter } from 'next/navigation'; // Importe o useRouter
import styles from './telaLogin.module.css';

export default function LoginPage() {
    const [showPassword, setShowPassword] = useState(true);
    const router = useRouter(); // Inicialize o useRouter

    const handleSubmit = (e) => {
        e.preventDefault(); // Impede o comportamento padrão do formulário

        // Aqui você pode adicionar a lógica de autenticação, se necessário

        // Redireciona para a rota /
        router.push('/');
    };

    return (
        <div className={styles.containerLogin}>
            <div className={styles.leftRed}>
                <h2>
                    Seja bem-vindo novamente!
                </h2>
            </div>
            <div className={styles.conteudoLogin}>
                <div className={styles.campoImagem}>
                    <Image src={'/images/logo.png'} width={50} height={50} alt="Logo" />
                    <p>Web Cars</p>
                </div>
                <div className={styles.containerFormulario}>
                    <h2>Login</h2>
                    <form className={styles.formulario} onSubmit={handleSubmit}> {/* Adicione o onSubmit ao formulário */}
                        <div className={styles.conteudoFormulario}>
                            <div className={styles.containerImage}>
                                <Image src={'/images/logo.png'} width={100} height={100} alt="Logo" />
                            </div>
                            <div className={styles.containerInputs}>
                                <div className={styles.campoInput}>
                                    <label>Email:</label>
                                    <div className={styles.inputLogin}>
                                        <input id={styles.inputEmail} type="email" />
                                    </div>
                                </div>
                                <div className={styles.campoInput}>
                                    <label>Senha:</label>
                                    <div className={styles.inputLogin}>
                                        <input type={showPassword ? "password" : "text"} />
                                        <button className={styles.bottonEye} type="button" onClick={() => setShowPassword(!showPassword)}>{showPassword ? <EyeOff size={20} /> : <Eye size={20} />}</button>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.campoBotoes}>
                                <div className={styles.containerAncoras}>
                                    <Link href='/TrocarSenha' className={styles.ancora}>Esqueceu sua senha?</Link>
                                    <Link href='/TelaCadastroCliente' className={styles.ancora}>Criar conta</Link>
                                </div>
                                <button className={styles.buttonSubmit} type="submit">Entrar</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}