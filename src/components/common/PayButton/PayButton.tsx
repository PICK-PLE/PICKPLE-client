import { IcKakaoPay } from '@svg';
import React, { ButtonHTMLAttributes } from 'react';
import { payButtonStyle } from './PayButton.style';

export interface PayButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'toss' | 'kakao';
}

const PayButton = () => {
  return (
    <button css={payButtonStyle}>
      <IcKakaoPay />
      <span>카카오페이</span>
    </button>
  );
};

export default PayButton;
