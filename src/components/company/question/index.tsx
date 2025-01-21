"use client";

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import styles from './styles.module.css';
import { useQuestion } from './hook';

const accordionData = [
  { id: 1, title: '1. 다른 곳은 소통이 잘 안 되던데, 계약 후 소통(연락)이 잘 될까요?' },
  { id: 2, title: '2. 제작 기간은 얼마나 걸리나요?' },
  { id: 3, title: '3. 홈페이지 수정요청을 하면 얼마나 걸리나요?' },
];

export default function CompanyQuestion() {
  const { getAnswer } = useQuestion();

  return (
    <main className={styles.question}>
      <div className={styles.questionTitleWrap}>
        <h6>자주 묻는 질문</h6>
      </div>
      <div className={styles.accordionWrap}>
        {accordionData.map((item, index) => (
          <Accordion key={item.id} className={styles.accordWrap}>
            <AccordionSummary
              expandIcon={<ArrowDropDownIcon />}
              aria-controls={`panel${item.id}-content`}
              id={`panel${item.id}-header`}
            >
              <Typography component="span" className={styles.accordTitle}>{item.title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              {/* 공통 내용 */}
              <Typography  component="div">
                {getAnswer(index)}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </main>
  );
}
