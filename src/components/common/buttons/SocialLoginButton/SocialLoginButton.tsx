import React, { ButtonHTMLAttributes } from 'react';

import { buttonStyle, iconWrapperStyle, kakaoStyle } from './SocialLoginButton.style';

export interface SocialLoginButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  platform: 'kakao';
  icon: React.ReactNode;
}

const SocialLoginButton = ({ onClick, platform, icon, children }: SocialLoginButtonProps) => {
  const switchPlatformStyle = () => {
    switch (platform) {
      case 'kakao':
        return kakaoStyle;
      default:
        return '';
    }
  };
  return (
    <button css={[buttonStyle, switchPlatformStyle()]} onClick={onClick}>
      <span css={iconWrapperStyle}>{icon}</span>
      {children}
    </button>
  );
};

export default SocialLoginButton;
