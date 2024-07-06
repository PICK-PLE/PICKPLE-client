import { IcKakaoLogo } from '@svg';
import SocialLoginButton from 'src/components/common/buttons/SocialLoginButton/SocialLoginButton';
import PayButton from 'src/components/common/buttons/PayButton/PayButton';
import { payButtonsStyle, socialLoginButtonStyle } from './Dev.style';

const Dev = () => {
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
    </div>
  );
};

export default Dev;
