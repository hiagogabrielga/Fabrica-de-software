'use client'

import React, { useState } from "react";
import styles from "./header.module.css";
import Image from "next/image";
import Link from "next/link";
import { AlignJustify } from "lucide-react";
export default function Header() {
    const [showMenulateral, setShowMenulateral] = useState(false)
    return (
        <header>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"></link>
            <div className={styles.cabecalho}>
                <div className={styles.logo}>
                    <Image src="/images/logo.png" alt="logo header" width={50} height={50} />
                </div>
                <div>
                    <AlignJustify className={styles.tres} size={33} onClick={() => setShowMenulateral(!showMenulateral)} />
                </div>
                {showMenulateral &&
                    <div className={styles.drop_menu}>
                        <ul className={styles.drop_lu}>
                            <li className={styles.drop_li}>
                                <ul className={styles.sub_menu}>
                                    <li className={styles.sub_menu_li}>
                                        <Link href="#">Olá</Link>
                                        <Link href="#">Olá</Link>
                                        <Link href="#">Olá</Link>
                                        <Link href="#">Olá</Link>
                                        <Link href="#">Olá</Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                }
            </div>
        </header>
    )
}