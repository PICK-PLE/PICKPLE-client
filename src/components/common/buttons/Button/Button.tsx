import { ButtonHTMLAttributes } from 'react';
import { buttonSize, buttonStyle, disabledStyle } from './Button.style';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'large' | 'medium' | 'small' | 'xSmall' | 'stroke' | 'round';
  disabled?: boolean;
}

const Button = ({ variant, disabled, onClick, children }: ButtonProps) => {
  return (
    <button
      css={[buttonStyle, buttonSize[variant], disabled && disabledStyle]}
      onClick={onClick}
      disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
