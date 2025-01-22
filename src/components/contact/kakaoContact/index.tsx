"use client";

import Image from 'next/image';
import styles from './styles.module.css';
import Snowfall from 'react-snowfall';

export default function KakaoContact() {

    return (
        <main className={styles.kakaoWrap}>
            <Snowfall
                color="#FFC0CB" // 연분홍색
                snowflakeCount={20} 
                style={{
                    zIndex: 1, // 배경으로 보내기
                }}
            />

            <p>저희는 의뢰인 한 분 한 분의 <strong>모든 프로젝트를 신중</strong>하게 시작합니다.</p>
            <p>의뢰인분들도 성급히 문의주시지 마시고,</p>
            <br/>
            <p>웹사이트를 천천히 둘러보시길 권장드리며</p>
            <p><strong>충분한 내부 논의 후 문의 주시길 바랍니다.</strong></p>
            <p><strong>문의 내용은 구체적일수록</strong> 정확한 안내를 받으실 수 있습니다.</p>

            <a href="http://pf.kakao.com/_glMxbn/chat" target="_blank" className={styles.kakao}>
                <Image
                    src="/images/kakaotalk_chat.png"
                    alt="logo"
                    className={styles.kakaoImg}
                    width={0} 
                    height={0}
                    sizes="100vw"
                />
                카카오톡으로 상담하기
            </a>
        </main>
    );
}