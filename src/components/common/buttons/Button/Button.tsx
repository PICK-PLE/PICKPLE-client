import { ButtonHTMLAttributes } from 'react';
import { buttonSize, buttonStyle, disabledStyle } from './Button.style';
import { SerializedStyles, Theme } from '@emotion/react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'large' | 'medium' | 'small' | 'xSmall' | 'stroke' | 'round';
  disabled?: boolean;
  customStyle?: ((theme: Theme) => SerializedStyles) | SerializedStyles;
}

const Button = ({ variant, disabled, customStyle, onClick, children }: ButtonProps) => {
  return (
    <button
      css={[buttonStyle, buttonSize[variant], disabled && disabledStyle, customStyle]}
      onClick={onClick}
      disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
