import { Button, LogoHeader, Modal, ProgressBar } from '@components';
import { GuestClassRegisterCard } from '@pages/class/components';
import {
  classApplyDepositLayout,
  depositArticleLayout,
  depositCautionTextStyle,
  depositFooterStyle,
  depositHStyle,
  depositSpanStyle,
  dipositWrapperStyle,
} from '@pages/class/page/ClassApply/ClassApplyDeposit/ClassApplyDeposit.style';
import { DepositModal } from '@pages/guest/components';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ClassApplyDeposit = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    navigate('/class/apply/complete');
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

            <main>
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

        {isModalOpen ? (
          <Modal onClose={handleModalClose}>
            <DepositModal onClose={handleModalClose} />
          </Modal>
        ) : null}
      </div>
    </>
  );
};

export default ClassApplyDeposit;
