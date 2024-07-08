import { ProgressBar } from '@components';
import LogoHeader from 'src/components/common/headers/LogoHeader/LogoHeader';
import { devContainer } from './Dev.style';
import { ApplicantAccordion } from '@components';
import { useState } from 'react';
import {
  APPLICANT_DATA,
  APPLICANT_ANSWER_LIST,
} from 'src/components/common/ApplicantAccordion/applicant';
import { mergeApplicantData } from 'src/components/common/ApplicantAccordion/mergeApplicantData';
import { accodionAlignStyle } from 'src/pages/dev/Dev.style';

// 통합된 데이터 생성
const mergedData = mergeApplicantData(APPLICANT_DATA, APPLICANT_ANSWER_LIST);

const Dev = () => {
  const [checkedStates, setCheckedStates] = useState<boolean[]>(
    new Array(mergedData.length).fill(false) // 초기 상태를 모든 항목이 unchecked 상태로 설정
  );

  // 특정 아코디언 항목의 체크 상태를 토글
  const toggleChecked = (index: number) => {
    setCheckedStates((prevStates) =>
      prevStates.map((checked, i) => (i === index ? !checked : checked))
    );
  };

  // checkedApplicant 배열에 체크된 applicant들을 담는 로직
  const checkedApplicant = mergedData.filter((_, index) => checkedStates[index]);

  console.log(checkedApplicant);

  return (
    <>
      <LogoHeader />
      <ProgressBar progress={77} />
      <section css={devContainer}>
        {/* 여기에 컴포넌트 추가해보고, 디바이스 크기 조정해보면서 테스트 */}
        <div css={accodionAlignStyle}>
          {mergedData.map((applicant, index) => (
            <ApplicantAccordion
              key={applicant.applicantId}
              applicantName={applicant.nickname}
              applicantImg={applicant.profileImage}
              applyDate={applicant.applicationDate}
              questions={applicant.questions}
              isChecked={checkedStates[index]}
              toggleChecked={() => toggleChecked(index)}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Dev;
