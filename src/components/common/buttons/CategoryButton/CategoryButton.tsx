import { useState } from 'react';
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
  icon?: React.ReactNode;
}

const CategoryButton = ({ children, onSelect, onClick, icon, ...props }: CategoryButtonProps) => {
  const theme = useTheme();
  const [isSelected, setIsSelected] = useState(false);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setIsSelected(!isSelected);
    if (onClick) {
      onClick(event);
    }
  };

  return (
    <section css={categoryButtonContainer}>
      <div css={(theme) => [categoryButtonWrapper(theme, isSelected)]}>
        <button
          type="button"
          onSelect={onSelect}
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
