import {
  articleStyle,
  bodyTextStyle,
  divStyle,
  headerStyle,
  iconStyle,
  mainStyle,
  modalContainerStyle,
  purpleStyle,
  titleStyle,
} from './DepositErrorModal.style';
import { IcClose } from '@svg';

interface DepositErrorModalProps {
  onClose: () => void;
}

const DepositErrorModal = ({ onClose }: DepositErrorModalProps) => {
  return (
    <div css={modalContainerStyle}>
      <article css={articleStyle}>
        <header css={headerStyle}>
          <h4 css={titleStyle}>입금에 문제가 생기셨나요?</h4>
          <span css={iconStyle} onClick={onClose}>
            <IcClose />
          </span>
        </header>
        <main css={mainStyle}>
          <div css={bodyTextStyle}>
            모임 신청을 완료했다면, 우선
            <br />
            <span css={purpleStyle}>[입금을 완료했어요]</span> 버튼을 클릭해 주세요.
          </div>
          <div css={bodyTextStyle}>
            신청 마감일 전에 <span css={purpleStyle}>[마이페이지] &gt; [my 클래</span>
            <br />
            <span css={purpleStyle}>스 모임]</span>에서 입금을 진행할 수 있어요.
          </div>
          <div css={bodyTextStyle}>
            모임 신청 마감일 이전에 입금을 하지 않으
            <br />
            면, 모임에 참가할 수 없으니 유의해 주세요!
          </div>
        </main>
      </article>
      <div css={divStyle}></div>
    </div>
  );
};

export default DepositErrorModal;
