import { HTMLAttributes } from 'react';

import { useNavigate } from 'react-router-dom';

import { IcNext } from '@svg';

import { childrenStyle, iconStyle, wrapperStyle } from './NavigateBox.style';

export interface NavigateBoxProps extends HTMLAttributes<HTMLDivElement> {
  path: string;
}

const NavigateBox = ({ children, path }: NavigateBoxProps) => {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate(path);
  };
  return (
    <div css={wrapperStyle} onClick={handleButtonClick}>
      <span css={childrenStyle}>{children}</span>
      <span css={iconStyle}>
        <IcNext />
      </span>
    </div>
  );
};

export default NavigateBox;
