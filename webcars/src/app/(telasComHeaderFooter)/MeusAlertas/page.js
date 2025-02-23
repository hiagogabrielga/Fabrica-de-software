'use client';
import React from "react";
import Link from 'next/link';
import styles from './meusAlertas.module.css';
import { Plus, Filter, Car } from 'lucide-react';

export default function MeusAlertas() {
    const itens = [
        { nome: 'Alerta 1', dataCriacao: '2025-02-01', dataAlteracao: '2025-02-10' },
        { nome: 'Alerta 2', dataCriacao: '2025-02-02', dataAlteracao: null },
        { nome: 'Alerta 3', dataCriacao: '2025-02-03', dataAlteracao: '2025-02-15' },
        { nome: 'Alerta 4', dataCriacao: '2025-02-04', dataAlteracao: null },
        { nome: 'Alerta 5', dataCriacao: '2025-02-05', dataAlteracao: '2025-02-20' },
        { nome: 'Alerta 6', dataCriacao: '2025-02-06', dataAlteracao: null },
        { nome: 'Alerta 7', dataCriacao: '2025-02-07', dataAlteracao: '2025-02-18' },
    ];

    return (
        <div className={styles.bodyMeusProdutos}>
            <h2>Meus Alertas</h2>
            <div className={styles.container}>
                <div className={styles.conteudoContainer}>
                    <Link href='/adicionarAlerta' id={styles.cardAdicionar}>
                        <div className={styles.conteudoCard}>
                            <div className={styles.iconesCard}>
                                <Plus />
                                <Filter />
                            </div>
                            <p>Adicionar Alerta</p>
                        </div>
                    </Link>
                    {itens.map((item, index) => (
                        <Link href='/editarAlerta' key={index} className={styles.card}>
                            <div className={styles.conteudoCard}>
                                <div className={styles.iconesCard}>
                                    <Filter />
                                    <Car />
                                </div>
                                <p>{item.nome}</p>
                                <div className={styles.valoresDatas}>
                                    <p>Criado em: {item.dataCriacao}</p>
                                    {item.dataAlteracao && <p>Última alteração: {item.dataAlteracao}</p>}
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
