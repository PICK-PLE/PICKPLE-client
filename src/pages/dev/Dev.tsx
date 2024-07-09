import { IcKakaoLogo, IcNjob } from '@svg';
import SocialLoginButton from 'src/components/common/button/SocialLoginButton/SocialLoginButton';
import PayButton from 'src/components/common/buttons/PayButton/PayButton';
import { payButtonsStyle, socialLoginButtonStyle } from './Dev.style';
import { CategoryButton } from '@components';
import { useState } from 'react';

const Dev = () => {
  const [isSelected, setIsSelected] = useState(false);

  const handleClick = () => {
    setIsSelected(!isSelected);
  };
  return (
    <div css={socialLoginButtonStyle}>
      <SocialLoginButton
        platform="kakao"
        icon={<IcKakaoLogo />}
        onClick={() => console.log('카카오로 시작하기 클릭')}>
        카카오로 시작하기
      </SocialLoginButton>
      <div css={payButtonsStyle}>
        <PayButton variant="kakao" totalPrice={10000} />
        <PayButton variant="toss" totalPrice={10000} />
      </div>

      <div>
        <CategoryButton icon={<IcNjob />} isSelected={isSelected} handleClick={handleClick}>
          adsf
        </CategoryButton>
      </div>
    </div>
  );
};

export default Dev;
