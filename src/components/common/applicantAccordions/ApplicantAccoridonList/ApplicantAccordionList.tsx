import { ApplicantAccordion } from '@components';
import { applicantAccordionListLayout } from 'src/components/common/applicantAccordions/ApplicantAccoridonList/ApplicantAccordionList.style';
import { ApplicantData } from '@pages/host/page/MyClassManage/MyClassManage';

interface ApplicantAccordionListProps {
  moimId: number;
  applicantData: ApplicantData[];
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
