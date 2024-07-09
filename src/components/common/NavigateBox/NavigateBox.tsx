import { IcRouteArrow } from '@svg';
import { HTMLAttributes } from 'react';
import { useNavigate } from 'react-router-dom';
import { iconStyle, wrapperStyle } from './NavigateBox.style';

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
      <span>{children}</span>
      <span css={iconStyle}>
        <IcRouteArrow />
      </span>
    </div>
  );
};

export default NavigateBox;
