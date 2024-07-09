import { ButtonHTMLAttributes } from 'react';
import { buttonSize, buttonStyle, disabledStyle } from './Button.style';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size: 'xLarge' | 'large' | 'medium' | 'small' | 'xSmall' | 'xxSmall';
  disabled?: boolean
}

const Button = ({ size, disabled, onClick, children }: ButtonProps) => {
  return (
    <button
      css={[buttonStyle, buttonSize[size], disabled && disabledStyle]}
      onClick={onClick}
      disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
