import { IcKakaoPay, IcTossPay } from '@svg';
import { ButtonHTMLAttributes } from 'react';
import { payButtonStyle, paySpanStyle } from './PayButton.style';

export interface PayButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'toss' | 'kakao';
}

const PayButton = ({ variant }: PayButtonProps) => {
  return (
    <>
      {variant === 'kakao' ? (
        <button css={payButtonStyle}>
          <IcKakaoPay />
          <span css={paySpanStyle}>카카오페이</span>
        </button>
      ) : (
        <button css={payButtonStyle}>
          <IcTossPay />
          <span css={paySpanStyle}>토스페이</span>
        </button>
      )}
    </>
  );
};

export default PayButton;
