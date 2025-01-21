import Link from 'next/link';
import styles from './styles.module.css'
import Image from 'next/image';

export default function LayoutFooter() { 
    return (
        <main className={styles.footer}>
            <div className={styles.footerWrap}>
                <div className={styles.whiteLogoWrap}>
                    <Image
                        src="/images/white_logo.png"
                        alt="white_logo"
                        className={styles.whiteLogo}
                        width={0} 
                        height={0}
                        sizes="100vw"
                    />
                </div>
                <div className={styles.bizInfoWrap}>
                    <h6 className={styles.companyName}>CODE SHAPER.</h6>
                    <div className={styles.bizInfoRow}>
                        <div className={styles.bizInfo}>
                            <span>CEO</span>
                            <span>최성빈</span>
                        </div>
                        <div className={styles.bizInfo}>
                            <span>BUSINESS NUMBER</span>
                            <span>189-01-03608</span>
                        </div>
                    </div>

                    <div className={styles.bizInfoRow}>
                        <div className={styles.bizInfo}>
                            <span>CONTACT</span>
                            <a href="mailto:contact@cshaper.co.kr">contact@cshaper.co.kr</a>
                        </div>
                        <div className={styles.bizInfo}>
                            <span>TEL</span>
                            <span>+82) 10-4252-9806</span>
                        </div>
                    </div>
                    <div className={styles.bizInfoRow}>
                        <div className={styles.bizInfo}>
                            <span>OFFICE</span>
                            <span>부산 수영구 무학로 49번길 54</span>
                        </div>
                    </div>

                    <p className={styles.copyright}>
                        <span>
                            Copyright ⓒ&nbsp;<strong>CODE SHAPER</strong>. 
                            ALL RIGHTS RESERVED.
                        </span>
                    </p>
                </div>
            </div>
        </main>
    );
}