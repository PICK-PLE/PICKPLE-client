import { SocialLoginButton } from '@components';
import { IcKakaoLogo, Logo } from '@svg';
import { loginWrapper, logoStyle } from './Login.style';

const Login = () => {
  const kakaoLoginUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${
    import.meta.env.VITE_REST_API_KEY
  }&redirect_uri=${import.meta.env.VITE_REDIRECT_URI}&response_type=code`;

  const handleLoginClick = () => {
    window.location.href = kakaoLoginUrl;
  };

  return (
    <div css={loginWrapper}>
      <Logo css={logoStyle} />
      <SocialLoginButton platform="kakao" icon={<IcKakaoLogo />} onClick={handleLoginClick}>
        카카오로 시작하기
      </SocialLoginButton>
    </div>
  );
};

export default Login;
