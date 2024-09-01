import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { SocialLoginButton } from '@components';
import { graphicImage, routePath } from '@constants';
import { IcKakaoLogo, Logo } from '@svg';
import { isLoggedIn } from '@utils';

import {
  loginWrapper,
  titleStyle,
  logoWrapper,
  loginImageStyle,
  titleWrapper,
  loginImageWrapper,
} from './Login.style';

const Login = () => {
  const navigate = useNavigate();
  const kakaoLoginUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${
    import.meta.env.VITE_REST_API_KEY
  }&redirect_uri=${import.meta.env.VITE_REDIRECT_URI}&response_type=code`;

  const handleLoginClick = () => {
    window.location.replace(kakaoLoginUrl);
  };

  useEffect(() => {
    if (isLoggedIn()) {
      navigate(routePath.HOME);
    }
  }, [navigate]);

  return (
    <div css={loginWrapper}>
      <div css={titleWrapper}>
        <h1 css={titleStyle}>
          로그인 후 내가 PICK한
          <br /> 그 사람과 함께해 보세요!
        </h1>
        <Logo css={logoWrapper} />
      </div>
      <div css={loginImageWrapper}>
        <img css={loginImageStyle} src={graphicImage.LoginImage} alt="로그인 그래픽" />
      </div>
      <SocialLoginButton platform="kakao" icon={<IcKakaoLogo />} onClick={handleLoginClick}>
        카카오로 시작하기
      </SocialLoginButton>
    </div>
  );
};

export default Login;
