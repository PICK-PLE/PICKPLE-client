import { IcKakaoPay, IcTossPay } from '@svg';
import { ButtonHTMLAttributes } from 'react';
import { payButtonStyle, paySpanStyle } from './PayButton.style';
import { getDeviceType } from 'src/utils/getDeviceType';
import Toast from 'src/components/common/Toast/Toast';
import { useToast } from '@hooks';

export interface PayButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'toss' | 'kakao';
  totalPrice: number;
}

const PayButton = ({ variant, totalPrice }: PayButtonProps) => {
  const { showToast, isToastVisible } = useToast();
  const deviceType = getDeviceType();
  const toHexValue = (value: number) => {
    return (value * 524288).toString(16);
  };

  const handleKakaoPayClick = () => {
    const userId = 'Ej8ahMiyQ';
    const amount = toHexValue(totalPrice);

    if (deviceType === 'Android' || deviceType === 'iOS') {
      window.open(`https://qr.kakaopay.com/${userId}${amount}`, '_blank');
    } else {
      console.log('데스크탑에서 버튼 클릭');
      showToast();
    }
  };

  const handleTossPayClick = () => {
    const bank = '농협은행';
    const accountNo = '3521157711813';

    if (deviceType === 'Android' || deviceType === 'iOS') {
      window.open(
        `supertoss://send?bank=${bank}&accountNo=${accountNo}&origin=linkgen&amount=${totalPrice}`,
        '_blank'
      );
    } else {
      console.log('데스크탑에서 버튼 클릭');
      showToast();
    }
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

      <Toast isVisible={isToastVisible} toastBottom={3}>
        모바일 기기로 결제를 진행해주세요.
      </Toast>
    </>
  );
};

export default PayButton;
