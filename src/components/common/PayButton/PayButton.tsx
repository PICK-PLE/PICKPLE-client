import { IcKakaoPay, IcTossPay } from '@svg';
import { ButtonHTMLAttributes } from 'react';
import { payButtonStyle, paySpanStyle } from './PayButton.style';

export interface PayButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'toss' | 'kakao';
  totalPrice: number;
  classname?: string;
  guestname?: string;
}

const PayButton = ({ variant, totalPrice, classname, guestname }: PayButtonProps) => {
  const toHexValue = (value: number) => {
    return (value * 524288).toString(16);
  };

  const handleKakaoPayClick = () => {
    const userId = '';
    const amount = toHexValue(totalPrice);

    window.open(`https://qr.kakaopay.com/${userId}${amount}`, '_blank');
  };

  const handleTossPayClick = () => {
    const bank = '우리은행';
    const accountNo = '1002455429380';

    window.open(
      `supertoss://send?bank=${bank}&accountNo=${accountNo}&origin=linkgen&amount=${totalPrice}&msg=${classname}_${guestname}`,
      '_blank'
    );
  };
  return (
    <>
      {variant === 'kakao' ? (
        <button css={payButtonStyle} onClick={handleKakaoPayClick}>
          <IcKakaoPay />
          <span css={paySpanStyle}>카카오페이</span>
        </button>
      ) : (
        <button css={payButtonStyle} onClick={handleTossPayClick}>
          <IcTossPay />
          <span css={paySpanStyle}>토스페이</span>
        </button>
      )}
    </>
  );
};

export default PayButton;
