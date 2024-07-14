import { ReactNode } from 'react';
import { IconTextContainer, iconWrapper, textStyle } from './IconText.style';

interface IconTextProps {
  icon: ReactNode;
  text: string;
}

const IconText = ({ icon, text }: IconTextProps) => {
  return (
    <div css={IconTextContainer}>
      <div css={iconWrapper}>{icon}</div>
      <p css={textStyle}>{text}</p>
    </div>
  );
};

export default IconText;
