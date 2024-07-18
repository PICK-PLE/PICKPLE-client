import { IcShare } from '@svg';
import { ButtonHTMLAttributes } from 'react';
import { buttonStyle, iconStyle } from './ShareButton.style';

export interface ShareButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  url?: string;
  title?: string;
  text?: string;
}

// TODO: https 환경에서 테스트. 별로라면 공유하기 기능 모달로 변경
const ShareButton = ({ onClick }: ShareButtonProps) => {
  return (
    <button css={buttonStyle} onClick={onClick}>
      <IcShare css={iconStyle} />
    </button>
  );
};

export default ShareButton;
