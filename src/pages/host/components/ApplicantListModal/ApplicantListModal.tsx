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
}

const ApplicantListModal = ({ applicantListData }: ApplicantListModalProps) => {
  const { maxGuest, submitterList } = applicantListData;
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
              총 <span css={applicantCountStyle}>{maxGuest}</span>명
            </h1>
          </div>
        </header>
        <main css={mainStyle}>
          <ul css={ulStyle}>
            {submitterList.map((submitter) => (
              <li key={submitter.submitterId} css={liStyle}>
                <SimpleUserProfile size="large" username={submitter.nickname} />
              </li>
            ))}
          </ul>
        </main>
      </section>
      <Button variant="medium">확인</Button>
    </article>
  );
};

export default ApplicantListModal;
