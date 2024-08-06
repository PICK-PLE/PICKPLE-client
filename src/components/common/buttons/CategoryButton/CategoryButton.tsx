import { ButtonHTMLAttributes } from 'react';

import {
  categoryButtonWrapper,
  categoryButtonStyle,
  iconWrapper,
  textStyle,
  categoryButtonContainer,
} from './CategoryButton.style';

interface CategoryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
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
  return (
    <section css={categoryButtonContainer}>
      <div css={[categoryButtonWrapper(isSelected)]}>
        <button
          type="button"
          onClick={handleClick}
          css={[categoryButtonStyle(isSelected)]}
          {...props}>
          <span css={iconWrapper(isSelected)}>{icon}</span>
        </button>
      </div>
      <p css={textStyle}>{children}</p>
    </section>
  );
};

export default CategoryButton;
