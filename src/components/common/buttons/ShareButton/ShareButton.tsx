import { IcShare } from '@svg';
import { ButtonHTMLAttributes } from 'react';
import { buttonStyle, iconStyle } from './ShareButton.style';

export interface ShareButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  url?: string;
  title?: string;
  text?: string;
}

// TODO: https 환경에서 테스트. 별로라면 공유하기 기능 모달로 변경
const ShareButton = ({
  url = 'https://pick-ple.com',
  title = 'PICK!PLE',
  text = "내가 PICK!한 바로 '그 사람'과 함께하는 클래스 모임.",
}: ShareButtonProps) => {
  return (
    <button
      css={buttonStyle}
      onClick={() => {
        navigator.share({
          url,
          title,
          text,
        });
      }}>
      <IcShare css={iconStyle} />
    </button>
  );
};

export default ShareButton;
