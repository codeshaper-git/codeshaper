import Image from "next/image";
import styles from "./styles.module.css";

export default function HomeDeposit() {
    return (
        <main className={styles.main}>
            <div className={styles.subMain}>
                <div className={styles.imgWrap}>
                    <Image
                        src="/images/deposit.gif"
                        alt="입금확인"
                        className={styles.depositImg}
                        width={0} 
                        height={0}
                        sizes="100vw"
                    />
                </div>
                <div className={styles.contentWrap}>
                    <p className={styles.title1}>계약금을 한 번에 결제하면 뭔가 불안하신가요?</p>
                    <p className={styles.title2}>프로젝트 시작 전에 착수금</p>
                    <p className={styles.title2}>프로젝트 종료 이후 잔금 처리 시스템!</p>
                    <br/>
                    <p className={styles.content}>의뢰인과 업체와의 약속을 지키기위한 장치가 필요하지 않을까?</p>
                    <p className={styles.content}>고민해봤습니다.</p>
                    <p className={styles.content}>고민 끝에 상호간 신뢰를 쌓을 수 있는</p>
                    <p className={styles.content}>착수금/잔금 시스템을 운영하고 있습니다.</p>
                    <p className={styles.content}>한 번에 전체 금액을 결제하지 않고</p>
                    <p className={styles.content}>작업물 최종 컨펌 후 잔금을 결제하는 형식으로</p>
                    <p className={styles.content}>프로젝트 착수에도 문제 없으며,</p>
                    <p className={styles.content}>동시에 의뢰인의 안심도 또한 높여드립니다.</p>
                    <p className={styles.content}>* (실제 착수금/잔금 입금 내역을 직접 확인하세요.)</p>
                </div>
            </div>
        </main>
    );
}