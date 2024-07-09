import { HTMLAttributes } from 'react';
import {
  categoryButtonWrapper,
  categoryButtonStyle,
  iconWrapper,
  textStyle,
  categoryButtonContainer,
} from './CategoryButton.style';
import { useTheme } from '@emotion/react';

interface CategoryButtonProps extends HTMLAttributes<HTMLButtonElement> {
  icon: React.ReactNode;
  isSelected: boolean;
  setIsSelected?: React.Dispatch<React.SetStateAction<boolean>>;
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const CategoryButton = ({
  children,
  icon,
  isSelected = false,
  handleClick,
  ...props
}: CategoryButtonProps) => {
  const theme = useTheme();

  return (
    <section css={categoryButtonContainer}>
      <div css={(theme) => [categoryButtonWrapper(theme, isSelected)]}>
        <button
          type="button"
          onClick={handleClick}
          css={(theme) => [categoryButtonStyle(theme, isSelected)]}
          {...props}>
          <span css={iconWrapper(theme, isSelected)}>{icon}</span>
        </button>
      </div>
      <p css={textStyle}>{children}</p>
    </section>
  );
};

export default CategoryButton;
