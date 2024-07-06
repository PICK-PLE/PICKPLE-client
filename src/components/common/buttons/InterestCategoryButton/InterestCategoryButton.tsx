import { useTheme } from '@emotion/react';
import {
  InterestCategoryButtonStyle,
  InterestCategoryButtonVariant,
  iconWrapperStyle,
} from './InterestCategoryButton.style';
import { HTMLAttributes } from 'react';
interface InterestCategoryButtonProps extends HTMLAttributes<HTMLButtonElement> {
  variant: 'default';
  icon: React.ReactNode;
}

const InterestCategoryButton = ({
  children,
  variant,
  icon,
  onClick,
  ...props
}: InterestCategoryButtonProps) => {
  const theme = useTheme();
  return (
    <button
      css={[InterestCategoryButtonStyle, InterestCategoryButtonVariant(theme)[variant]]}
      onClick={onClick}
      {...props}>
      <span css={iconWrapperStyle}>{icon}</span>
      {children}
    </button>
  );
};

export default InterestCategoryButton;
