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
  onClick,
  ...props
}: InterestCategoryButtonProps) => {
  return (
    <button
      css={[InterestCategoryButtonStyle, InterestCategoryButtonVariant[variant]]}
      onClick={onClick}
      {...props}>
      <span css={iconWrapperStyle}>{icon}</span>
      {children}
    </button>
  );
};

export default InterestCategoryButton;
