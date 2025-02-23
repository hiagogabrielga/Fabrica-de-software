'use client'
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import Image from "next/image";
import Link from 'next/link'
import styles from './telaLogin.module.css'

export default function LoginPage() {
    const [showPassword, setShowPassword] = useState(true);

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
                    <h3>Login</h3>
                    <form className={styles.formulario}>
                        <div className={styles.conteudoFormulario}>
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
                                <Link href='/TrocarSenha' className={styles.ancora}>Esqueceu sua senha?</Link>
                                <button className={styles.buttonSubmit} type="submit">Entrar</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

