import {
  applicantCountStyle,
  countTextStyle,
  headerStyle,
  iconStyle,
  liStyle,
  mainStyle,
  modalCommentTitleStyle,
  modalContainerStyle,
  sectionStyle,
  textDivStyle,
  ulStyle,
} from './ApplicantListModal.style';
import { Button, SimpleUserProfile } from '@components';
import { components } from '@schema';
import {
  PatchSubmitterRequest,
  usePatchSubmitter,
} from '@apis/domains/moimSubmission/usePatchSubmitter';
import { useNavigate } from 'react-router-dom';
import { CheckModalImage } from '@image';

interface ApplicantListModalProps {
  applicantListData: components['schemas']['MoimSubmissionByMoimResponse'];
  onClose: () => void;
}
const moimId = 5;
const ApplicantListModal = ({ applicantListData, onClose }: ApplicantListModalProps) => {
  const { submitterList } = applicantListData;
  const { mutate } = usePatchSubmitter();

  const submitterIdList = submitterList?.map((submitter) => submitter.submitterId);

  const navigate = useNavigate();
  const handleButtonClick = () => {
    mutate({ moimId, submitterIdList } as PatchSubmitterRequest);
    onClose();
    navigate('/host/myclass'); // 다시 모임 관리하는 host 페이지로 이동
  };

  return (
    <article css={modalContainerStyle}>
      <section css={sectionStyle}>
        <header css={headerStyle}>
          <span css={iconStyle}>
            <img src={CheckModalImage} alt="신청 완료 모달" />
          </span>
          <div css={textDivStyle}>
            <h1 css={modalCommentTitleStyle}>승인할 신청자 목록을 확인해주세요!</h1>
            <h1 css={countTextStyle}>
              총 <span css={applicantCountStyle}>{submitterList?.length}</span>명
            </h1>
          </div>
        </header>
        <main css={mainStyle}>
          <ul css={ulStyle}>
            {submitterList?.map((submitter) => (
              <li key={submitter.submitterId} css={liStyle}>
                <SimpleUserProfile size="large" username={submitter.nickname || ''} />
              </li>
            ))}
          </ul>
        </main>
      </section>
      <Button variant="medium" onClick={handleButtonClick}>
        확인
      </Button>
    </article>
  );
};

export default ApplicantListModal;
