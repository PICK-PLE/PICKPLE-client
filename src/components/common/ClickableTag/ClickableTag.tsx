import React from 'react';

import { clickableTagContainer } from './ClickableTag.style';

interface ClickableTagProps {
  children: React.ReactNode;
  onClick: () => void;
  isSelected: boolean;
}

const ClickableTag = ({ children, onClick, isSelected }: ClickableTagProps) => {
  return (
    <div css={(theme) => clickableTagContainer(theme, isSelected)} onClick={onClick}>
      {children}
    </div>
  );
};

export default ClickableTag;
