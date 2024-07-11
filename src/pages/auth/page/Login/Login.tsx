import { SocialLoginButton } from '@components';
import { IcKakaoLogo, Logo } from '@svg';
import { loginWrapper, logoStyle } from './Login.style';

const Login = () => {
  return (
    <div css={loginWrapper}>
      <Logo css={logoStyle} />
      <SocialLoginButton platform="kakao" icon={<IcKakaoLogo />}>
        카카오로 시작하기
      </SocialLoginButton>
    </div>
  );
};

export default Login;
