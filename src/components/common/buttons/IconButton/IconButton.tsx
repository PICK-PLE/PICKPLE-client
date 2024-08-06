import { ButtonHTMLAttributes } from 'react';

import { buttonStyle, iconWrapperStyle } from './IconButton.style';

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode;
}

const IconButton = ({ onClick, icon, children }: IconButtonProps) => {
  return (
    <button css={buttonStyle} onClick={onClick} type={'button'}>
      <span css={iconWrapperStyle}>{icon}</span>
      {children}
    </button>
  );
};

export default IconButton;
