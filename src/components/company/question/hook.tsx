"use client";
import styles from "./styles.module.css";

export const useQuestion = () => {
    const getAnswer = (index:number) => {
        switch(index) {
            case 0:
                return (    
                    <div className={styles.accordContent}>
                        <p>저희는 작업 시작과 동시에 카카오톡 <strong>'실시간 채팅방'</strong>을 개설합니다.</p>
                        <p>실시간으로 소통하며 클라이언트가 궁금해하는 사안에 대하여 발빠르게 응대를 도와드리고 있습니다.</p>
                        <p>작업이 잘 진행되고 있는지, 디자인이 적합한지, <strong>진행상황에 대한 질문들을 언제든 자유롭게 묻고 이야기 나눌 수 있습니다.</strong></p>
                    </div>
                );
            break;
            case 1:
                return (
                    <div className={styles.accordContent}>
                        <p>저희는 높은 홈페이지 퀄리티를 위해 일주일에 단 3건만 진행하고 있습니다.</p>
                        <p><strong>(*프로젝트 규모가 클 경우 1건만 진행하기도 합니다.)</strong></p>
                        <p>제작 규모에 따라 기간은 다소 편차가 있습니다만, 평균적으로 <strong>착수일 기점으로 7~14일</strong> 정도 소요됩니다.</p>
                    </div>  
                );
            break;
            case 2:
                return (
                    <div className={styles.accordContent}>
                        <p>코드셰이퍼는 기존 고객님들의 홈페이지 유지보수를 1순위로 생각합니다.</p>
                        <p>매일 아침 유지보수를 모두 마무리하고 업무를 시작합니다.</p>
                        <br/>
                        <p>또한 빠른 피드백을 위해 타업체처럼 홈페이지 게시판 형식이 아닌</p>
                        <p><strong>1:1 담당자</strong>를 배정하여 수정 요청을 받고 있습니다.</p>
                        <p>고객님들의 사업에 차질이 없도록 <strong>코드셰이퍼가 함께 하겠습니다.</strong></p>
                    </div>
                );
            break;
        }
    };

    return {
        getAnswer
    }
}