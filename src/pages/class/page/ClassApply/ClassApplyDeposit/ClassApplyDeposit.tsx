import { Button, LogoHeader, ProgressBar } from '@components';
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
} from './ClassApplyDeposit.style';
import DepositErrorModal from '@pages/guest/components/DepositErrorModal/DepositErrorModal';
import { MoimIdPathParameterType } from '@types';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import AbsoluteModal from 'src/components/common/AbsoluteModal/AbsoluteModal';

const ClassApplyDeposit = () => {
  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { moimId } = useParams<MoimIdPathParameterType>();

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };
  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleErrorModalOpen = () => {
    setIsErrorModalOpen(true);
  };

  const handleErrorModalClose = () => {
    setIsErrorModalOpen(false);
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
              <GuestClassRegisterCard
                moimId={moimId ?? ''}
                isModalOpen={isModalOpen}
                handleModalClose={handleModalClose}
              />
            </main>
          </div>

          <footer css={depositFooterStyle}>
            <Button variant="large" onClick={handleModalOpen}>
              입금하기
            </Button>
            <button css={depositCautionTextStyle} onClick={handleErrorModalOpen}>
              입금에 문제가 생기셨나요?
            </button>
          </footer>
        </article>

        {isErrorModalOpen && (
          <AbsoluteModal onClose={handleErrorModalClose}>
            <DepositErrorModal onClose={handleErrorModalClose} />
          </AbsoluteModal>
        )}
      </div>
    </>
  );
};

export default ClassApplyDeposit;
