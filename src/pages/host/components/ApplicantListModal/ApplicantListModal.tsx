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
import { IcCheckModal } from '@svg';
import { Button, SimpleUserProfile } from '@components';
import { ApplicantListResponseType } from '@types';

interface ApplicantListModalProps {
  applicantListData: ApplicantListResponseType;
  onClose: () => void;
}

const ApplicantListModal = ({ applicantListData, onClose }: ApplicantListModalProps) => {
  const { maxGuest, submitterList } = applicantListData;

  console.log(maxGuest)
  return (
    <article css={modalContainerStyle}>
      <section css={sectionStyle}>
        <header css={headerStyle}>
          <span css={iconStyle}>
            <IcCheckModal />
          </span>
          <div css={textDivStyle}>
            <h1 css={modalCommentTitleStyle}>승인할 신청자 목록을 확인해주세요!</h1>
            <h1 css={countTextStyle}>
              총 <span css={applicantCountStyle}>{submitterList.length}</span>명
            </h1>
          </div>
        </header>
        <main css={mainStyle}>
          <ul css={ulStyle}>
            {submitterList.map((submitter) => (
              <li key={submitter.applicantId} css={liStyle}>
                <SimpleUserProfile size="large" username={submitter.nickname} />
              </li>
            ))}
          </ul>
        </main>
      </section>
      <Button variant="medium" onClick={onClose}>
        확인
      </Button>
    </article>
  );
};

export default ApplicantListModal;
