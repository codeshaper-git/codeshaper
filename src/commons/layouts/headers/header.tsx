"use client";
import Image from 'next/image';
import styles from './styles.module.css';
import Link from 'next/link';
import MenuIcon from '@mui/icons-material/Menu';
import { Button } from '@mui/material';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useHeader } from './hook';

export default function LayoutHeader() { 
    const { isScrolled, toggleDrawer } = useHeader();

    return (
        <main className={`${styles.header} ${isScrolled ? styles.headerActive : ''}`}>
            <button onClick={toggleDrawer} className={`${styles.menuIcon} ${isScrolled ? styles.black : ''}`}>
                <MenuIcon/>
            </button>
            <div>
                <Link href="/">
                    <Image
                        src={`${isScrolled ? '/images/logo.png' : '/images/white_logo.png'}`}
                        alt="logo"
                        className={styles.logo}
                        width={0} 
                        height={0}
                        sizes="100vw"
                    />
                </Link>
            </div>
            <div className={styles.linkWrap}>
                <Link href="/company">
                    회사소개
                </Link> 
                <Link href="/contact" className={styles.linkBtn}>
                    문의하기
                </Link>
            </div>
        </main>
    );
}
