import { SerializedStyles, Theme } from '@emotion/react';
import { ButtonHTMLAttributes } from 'react';

import { buttonSize, buttonStyle, disabledStyle } from './Button.style';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant:
    | 'large'
    | 'medium'
    | 'small'
    | 'xSmall'
    | 'stroke'
    | 'round'
    | 'smallStroke'
    | 'xSmallStroke';
  disabled?: boolean;
  customStyle?: ((theme: Theme) => SerializedStyles) | SerializedStyles;
}

const Button = ({ variant, disabled, customStyle, children, ...props }: ButtonProps) => {
  return (
    <button
      type="button"
      css={[buttonStyle, buttonSize[variant], disabled && disabledStyle, customStyle]}
      disabled={disabled}
      {...props}>
      {children}
    </button>
  );
};

export default Button;
