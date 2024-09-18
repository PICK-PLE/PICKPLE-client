import { IcBlackAndWhiteLogo } from '@svg';

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
    <footer css={footerContainer}>
      <div css={footerWrapper}>
        <IcBlackAndWhiteLogo css={logoStyle} />
        <div css={termsOfUseStyle}>
          <p
            css={textStyle}
            onClick={() => window.open('https://www.notion.so/d7259d07f04d48718b1836d704160827')}>
            개인정보처리방침
          </p>
          <p
            css={textStyle}
            onClick={() => window.open('https://www.notion.so/fd3f3eddcf784f53baa89489a2a69e76')}>
            이용약관
          </p>
        </div>
        <div css={contactWrapper}>
          <p css={contactTextStyle}>대표 | 조소빈</p>
          <p css={contactTextStyle}>이메일 | pickpleee@gmail.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
