import { IcKakaoLogo, IcCopyPlus } from '@svg';
import { payButtonsStyle, socialLoginButtonStyle } from './Dev.style';
import { IconButton, SocialLoginButton, PayButton } from '@components';

const Dev = () => {
  return (
    <>
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
      <div>
        <IconButton icon={<IcCopyPlus />} onClick={() => {}}>
          작성하기
        </IconButton>
      </div>
    </>
  );
};

export default Dev;
