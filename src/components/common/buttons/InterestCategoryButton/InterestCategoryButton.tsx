import { ButtonHTMLAttributes } from 'react';

import {
  InterestCategoryButtonStyle,
  InterestCategoryButtonVariant,
  iconWrapperStyle,
} from './InterestCategoryButton.style';
interface InterestCategoryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default';
  icon: React.ReactNode;
}

const InterestCategoryButton = ({
  children,
  variant = 'default',
  icon,
  ...props
}: InterestCategoryButtonProps) => {
  return (
    <button
      type="button"
      css={[InterestCategoryButtonStyle, InterestCategoryButtonVariant[variant]]}
      {...props}>
      <span css={iconWrapperStyle}>{icon}</span>
      {children}
    </button>
  );
};

export default InterestCategoryButton;
