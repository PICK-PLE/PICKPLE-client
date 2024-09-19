import { useState } from 'react';

import { Button, ClipboardCopyButton, PayButton } from '@components';
import { IcClose } from '@svg';

import {
  accountHolderNameStyle,
  accountHolderStyle,
  accountInfoStyle,
  bankTextStyle,
  closeIconLayout,
  closeIconStyle,
  completeButtonCustomStyle,
  depositErrorButtonStyle,
  depositErrorButtonWrapper,
  depositErrorModalStyle,
  headerFirstH1Style,
  headerH1SpanStyle,
  headerSecondH1Style,
  headerSpanStyle,
  headerstyle,
  mainFirstSectionStyle,
  mainStyle,
  modalContainerStyle,
  payButtonSectionStyle,
} from './DepositModal.style';
import DepositErrorModal from '../DepositErrorModal/DepositErrorModal';

interface DepositModalProps {
  onClose: () => void;
  fee?: number;
}

const DepositModal = ({ onClose, fee }: DepositModalProps) => {
  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);

  const handleErrorModalToggle = () => {
    setIsErrorModalOpen((prev) => !prev);
  };
  const handleErrorModalClose = () => {
    setIsErrorModalOpen(false);
  };
  return (
    <>
      <article css={modalContainerStyle}>
        <div css={closeIconLayout}>
          <span css={closeIconStyle} onClick={onClose}>
            <IcClose />
          </span>
        </div>
        <header css={headerstyle}>
          <h1 css={headerFirstH1Style}>
            <span css={headerH1SpanStyle}>아래 계좌로 입금해주세요!</span>
          </h1>
          <h1 css={headerSecondH1Style}>
            <span>반드시 입금자명을</span>
            <span>
              <span css={headerSpanStyle}>닉네임</span>으로 변경해 주세요.
            </span>
          </h1>
        </header>
        <main css={mainStyle}>
          <section css={mainFirstSectionStyle}>
            <div css={accountInfoStyle}>
              <h4 css={bankTextStyle}>농협은행</h4>
              <ClipboardCopyButton />
            </div>
            <div css={accountHolderStyle}>
              예금주 <span css={accountHolderNameStyle}>조소빈</span>
            </div>
          </section>
          <section css={payButtonSectionStyle}>
            <PayButton variant="kakao" totalPrice={fee || 0} />
            <PayButton variant="toss" totalPrice={fee || 0} />
          </section>
          <Button variant="medium" onClick={onClose} customStyle={completeButtonCustomStyle}>
            입금을 완료했어요
          </Button>
        </main>
        <div css={depositErrorButtonWrapper}>
          <button css={depositErrorButtonStyle} onClick={handleErrorModalToggle}>
            입금에 문제가 생기셨나요?
          </button>
          {isErrorModalOpen && (
            <div css={depositErrorModalStyle}>
              <DepositErrorModal onClose={handleErrorModalClose} />
            </div>
          )}
        </div>
      </article>
    </>
  );
};

export default DepositModal;
