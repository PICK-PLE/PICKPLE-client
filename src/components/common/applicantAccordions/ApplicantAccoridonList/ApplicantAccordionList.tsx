import { ApplicantAccordion } from '@components';
import { components } from '@schema';

import { applicantAccordionListLayout } from './ApplicantAccordionList.style';


interface ApplicantAccordionListProps {
  moimId: number;
  applicantData: components['schemas']['SubmitterInfo'][];
  toggleChecked: (index: number) => void;
  checkedStates: boolean[];
}

const ApplicantAccordionList = ({
  moimId,
  checkedStates,
  toggleChecked,
  applicantData,
}: ApplicantAccordionListProps) => {
  return (
    <div css={applicantAccordionListLayout}>
      {applicantData.map((applicant, index) => (
        <ApplicantAccordion
          key={index}
          moimId={moimId}
          applicantData={applicant}
          isChecked={checkedStates[index]}
          toggleChecked={() => toggleChecked(index)}
        />
      ))}
    </div>
  );
};

export default ApplicantAccordionList;
