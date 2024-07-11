import { ApplicantAccordion } from '@components';
import { useState } from 'react';
import { mergeApplicantData } from 'src/components/common/applicantAccordions/mergeApplicantData';
import {
  APPLICANT_DATA,
  APPLICANT_ANSWER_LIST,
} from 'src/components/common/applicantAccordions/applicant';
import { applicantAccordionListLayout } from 'src/components/common/applicantAccordions/ApplicantAccoridonList/ApplicantAccordionList.style';

interface ApplicantAccordionListProps {
  moimId: number;
}

const ApplicantAccordionList = ({ moimId }: ApplicantAccordionListProps) => {
  // 통합된 데이터 생성
  const mergedData = mergeApplicantData(APPLICANT_DATA, APPLICANT_ANSWER_LIST);
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
    <div css={applicantAccordionListLayout}>
      {mergedData.map((applicant, index) => (
        <ApplicantAccordion
          moimId={moimId}
          guestId={1}
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
  );
};

export default ApplicantAccordionList;
