import Image from "next/image";
import styles from "./styles.module.css";

const services = [
    "/images/service/service01.png",
    "/images/service/service02.png",
    "/images/service/service03.png",
    "/images/service/service04.png"
];

export default function HomeService() {
    return (
        <main className={styles.main}>
            <div className={styles.subMain}>
                <h6>많은 경험과 기술 노하우를 갖춘 <strong>코드셰이퍼</strong>가</h6>
                <h6><strong>최고 퀄리티의</strong> 홈페이지 & 어플리케이션을 제작해드립니다.</h6>
                <div className={styles.serviceBoxWrap}>
                    {services.map((src, index) => (
                        <div key={index} className={styles.serviceBox}>
                            <Image
                                src={src}
                                alt={`service0${index + 1}`}
                                className={styles.serviceImg}
                                width={0} 
                                height={0}
                                sizes="100vw"
                            />
                            {index === 0 && (
                                <p>고객의 니즈를 반영한 전문 기획 및 디자인 제공</p>
                            )}
                            {index === 1 && (
                                <p>웹, 모바일, 어플리케이션 등 다양한 플랫폼 개발</p>
                            )}
                            {index === 2 && (
                                <p>고객사의 요구에 따라 맞춤형 웹·앱 서비스 제작</p>
                            )}
                            {index === 3 && (
                                <p>어플리케이션 제작 시 구글/앱 스토어 등록</p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
