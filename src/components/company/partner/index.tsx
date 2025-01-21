import Image from 'next/image';
import styles from './styles.module.css';

export default function CompanyPartner() {
    return (
        <main className={styles.mainWrap}>
            <div className={styles.imageWrap}>
                <Image
                    src="/images/banner/partner.jpg"
                    alt="logo"
                    className={styles.partner}
                    width={0} 
                    height={0}
                    sizes="100vw"
                />
            </div>
            <div className={styles.contentWrap}>
                <h5>작업의 열정을, 고객은 곧 비즈니스 파트너</h5>
                <p>비즈니스 파트너의</p>
                <p>매출을 높이기 위해, 사업을 성공 시키기 위해</p>
                <p>노력하는 것이</p>
                <h6><strong>우리가 존재하는 이유</strong>입니다.</h6>
                <a>회사 소개서 다운로드</a>
            </div>
        </main>
    );
}