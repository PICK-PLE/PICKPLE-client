import { IcClipboardCopy } from '@svg';
import { accountNumberStyle, buttonWrapperStyle, iconStyle } from './ClipboardCopyButton.style';

const ClipboardCopyButton = () => {
  const accountNumber = '1103234241312';
  const handleCopyClick = async () => {
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(accountNumber);
      } catch (err) {
        //Toast로 띄울 예정
        console.log('클립보드 복사 실패');
      }
    } else {
      //Toast로 띄울 예정
      console.log('클립보드에 복사할 수 없습니다.');
    }
  };
  return (
    <button css={buttonWrapperStyle} onClick={handleCopyClick}>
      <span css={accountNumberStyle}>{accountNumber}</span>
      <span css={iconStyle}>
        <IcClipboardCopy />
      </span>
    </button>
  );
};

export default ClipboardCopyButton;
