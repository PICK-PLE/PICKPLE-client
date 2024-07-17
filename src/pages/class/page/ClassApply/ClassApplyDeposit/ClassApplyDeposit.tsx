import { Button, LogoHeader, Modal, ProgressBar } from '@components';
import { GuestClassRegisterCard } from '@pages/class/components';
import {
  classApplyDepositLayout,
  depositArticleLayout,
  depositCautionTextStyle,
  depositFooterStyle,
  depositHStyle,
  depositSpanStyle,
  depositMainStyle,
  dipositWrapperStyle,
} from '@pages/class/page/ClassApply/ClassApplyDeposit/ClassApplyDeposit.style';
import { DepositModal } from '@pages/guest/components';
import { MoimIdPathParameterType } from '@types';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const ClassApplyDeposit = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { moimId } = useParams<MoimIdPathParameterType>();

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    navigate(`/class/${moimId}/apply/complete`);
  };

  return (
    <>
      <LogoHeader />
      <div css={classApplyDepositLayout}>
        <ProgressBar progress={75} />

        <article css={depositArticleLayout}>
          <div css={dipositWrapperStyle}>
            <header>
              <span css={depositSpanStyle}>클래스 모임 신청</span>
              <h1 css={depositHStyle}>
                모임 신청이 완료되었습니다! <br /> 이제 참가비를 입금해주세요.
              </h1>
            </header>

            <main css={depositMainStyle}>
              <GuestClassRegisterCard />
            </main>
          </div>

          <footer css={depositFooterStyle}>
            <Button variant="large" onClick={handleModalOpen}>
              송금하기
            </Button>
            <button css={depositCautionTextStyle}>입금에 문제가 생기셨나요?</button>
          </footer>
        </article>

        {isModalOpen && (
          <Modal onClose={handleModalClose}>
            <DepositModal onClose={handleModalClose} />
          </Modal>
        )}
      </div>
    </>
  );
};

export default ClassApplyDeposit;
