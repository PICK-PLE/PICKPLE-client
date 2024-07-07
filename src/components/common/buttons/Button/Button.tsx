import { ButtonHTMLAttributes } from 'react';
import { buttonSize, buttonStyle, disabledStyle } from './Button.style';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size: 'xLarge' | 'large' | 'medium' | 'small' | 'xSmall' | 'xxSmall';
  variant?: 'abled' | 'disabled';
}

const Button = ({ size, variant = 'abled', onClick, children }: ButtonProps) => {
  const isDisabled = variant === 'disabled';
  return (
    <button
      css={[buttonStyle, buttonSize[size], isDisabled && disabledStyle]}
      onClick={onClick}
      disabled={isDisabled}>
      {children}
    </button>
  );
};

export default Button;
