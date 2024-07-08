import { ApplicantAccordion } from '@components';
import {
  APPLICANT_DATA,
  APPLICANT_ANSWER_LIST,
} from 'src/components/common/ApplicantAccordion/applicant';
import { mergeApplicantData } from 'src/components/common/ApplicantAccordion/mergeApplicantData';
import { accodionAlignStyle } from 'src/pages/dev/Dev.style';

// 통합된 데이터 생성
const mergedData = mergeApplicantData(APPLICANT_DATA, APPLICANT_ANSWER_LIST);

const Dev = () => {
  return (
    <div css={accodionAlignStyle}>
      {mergedData.map((applicant) => (
        <ApplicantAccordion
          key={applicant.applicantId}
          applicantName={applicant.nickname}
          applicantImg={applicant.profileImage}
          applyDate={applicant.applicationDate}
          questions={applicant.questions}
        />
      ))}
    </div>
  );
};

export default Dev;
