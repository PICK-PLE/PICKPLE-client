import { useState } from 'react';

import useToast from 'src/hooks/useToast';

import { IcClipboardCopy } from '@svg';

import Toast from '../../Toast/Toast';

import { accountNumberStyle, buttonWrapperStyle, iconStyle } from './ClipboardCopyButton.style';


const ClipboardCopyButton = () => {
  const { showToast, isToastVisible } = useToast();
  const [toastMessage, setToastMessage] = useState('');
  const accountNumber = '3521157711813';
  const handleCopyClick = async () => {
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(accountNumber);
        setToastMessage('계좌번호가 복사되었어요.');
        showToast();
      } catch (err) {
        setToastMessage('클립보드 복사 실패');
        showToast();
      }
    } else {
      setToastMessage('클립보드에 복사할 수 없습니다.');
      showToast();
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
