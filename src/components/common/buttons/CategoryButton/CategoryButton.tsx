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
}

const CategoryButton = ({ children, icon, isSelected = false, ...props }: CategoryButtonProps) => {
  return (
    <section css={categoryButtonContainer}>
      <div css={[categoryButtonWrapper(isSelected)]}>
        <button type="button" css={[categoryButtonStyle(isSelected)]} {...props}>
          <span css={iconWrapper(isSelected)}>{icon}</span>
        </button>
      </div>
      <p css={textStyle}>{children}</p>
    </section>
  );
};

export default CategoryButton;
