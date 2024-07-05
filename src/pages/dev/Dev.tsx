import { IcKakaoLogo } from '@svg';
import SocialLoginButton from 'src/components/common/button/SocialLoginButton/SocialLoginButton';

const Dev = () => {
  return (
    <div>
      <SocialLoginButton
        platform="kakao"
        icon={<IcKakaoLogo />}
        onClick={() => console.log('카카오로 시작하기 클릭')}
      >카카오로 시작하기</SocialLoginButton>
    </div>
  );
};

export default Dev;
