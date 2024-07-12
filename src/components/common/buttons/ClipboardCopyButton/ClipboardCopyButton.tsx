import { IcClipboardCopy } from '@svg';
import { accountNumberStyle, buttonWrapperStyle, iconStyle } from './ClipboardCopyButton.style';
import useToast from 'src/hooks/useToast';
import Toast from '../../Toast/Toast';

const ClipboardCopyButton = () => {
  const { showToast, isToastVisible, toastMessage } = useToast();
  const accountNumber = '1103234241312';
  const handleCopyClick = async () => {
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(accountNumber);
        showToast('계좌번호가 복사되었어요.');
      } catch (err) {
        showToast('클립보드 복사 실패');
      }
    } else {
      showToast('클립보드에 복사할 수 없습니다.');
    }
  };
  return (
    <button css={buttonWrapperStyle} onClick={handleCopyClick}>
      <span css={accountNumberStyle}>{accountNumber}</span>
      <span css={iconStyle}>
        <IcClipboardCopy />
        <Toast isVisible={isToastVisible} toastBottom={3}>
          {toastMessage}
        </Toast>
      </span>
    </button>
  );
};

export default ClipboardCopyButton;
