import { Logo } from '@svg';
import {
  contactTextStyle,
  contactWrapper,
  footerContainer,
  footerWrapper,
  logoStyle,
  termsOfUseStyle,
  textStyle,
} from './Footer.style';

const Footer = () => {
  return (
    <div css={footerContainer}>
      <div css={footerWrapper}>
        <Logo css={logoStyle} />
        <div css={termsOfUseStyle}>
          <p css={textStyle}>개인정보처리방침 이용약관</p>
        </div>
        <div css={contactWrapper}>
          <p css={contactTextStyle}>대표 | 조소빈</p>
          <p css={contactTextStyle}>이메일 | pickpleee@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
