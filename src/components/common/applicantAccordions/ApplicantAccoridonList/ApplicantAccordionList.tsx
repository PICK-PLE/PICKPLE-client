import { ApplicantAccordion } from '@components';
import { applicantAccordionListLayout } from './ApplicantAccordionList.style';
import { ApplicantDataType } from '@types';

interface ApplicantAccordionListProps {
  moimId: number;
  applicantData: ApplicantDataType[];
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
          guestId={1}
          applicantData={applicant}
          isChecked={checkedStates[index]}
          toggleChecked={() => toggleChecked(index)}
        />
      ))}
    </div>
  );
};

export default ApplicantAccordionList;
