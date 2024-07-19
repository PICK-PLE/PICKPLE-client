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
import { images } from '@constants';

interface ApplicantListModalProps {
  submitterList: components['schemas']['SubmitterInfo'][];
  onClose: () => void;
  moimId: number;
}

const ApplicantListModal = ({ submitterList, onClose, moimId }: ApplicantListModalProps) => {
  const { mutate } = usePatchSubmitter();

  const navigate = useNavigate();
  const handleButtonClick = () => {
    const submitterIdList = submitterList?.map((submitter) => submitter.submitterId);
    mutate({ moimId, submitterIdList } as PatchSubmitterRequest);
    onClose();
    navigate('/host/myclass'); // 다시 모임 관리하는 host 페이지로 이동
  };

  return (
    <article css={modalContainerStyle}>
      <section css={sectionStyle}>
        <header css={headerStyle}>
          <img src={images.CheckModalImage} css={iconStyle} alt="신청 완료 모달" />
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
                <SimpleUserProfile
                  size="large"
                  userImgUrl={images.GuestProfileImage}
                  username={submitter.nickname || ''}
                />
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
