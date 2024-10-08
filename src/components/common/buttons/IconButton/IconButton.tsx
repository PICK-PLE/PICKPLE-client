import { ButtonHTMLAttributes } from 'react';

import { buttonStyle, iconWrapperStyle } from './IconButton.style';

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode;
}

const IconButton = ({ icon, children, ...props }: IconButtonProps) => {
  return (
    <button css={buttonStyle} type="button" {...props}>
      <span css={iconWrapperStyle}>{icon}</span>
      {children}
    </button>
  );
};

export default IconButton;
