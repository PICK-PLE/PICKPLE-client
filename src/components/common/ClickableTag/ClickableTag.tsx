import React from 'react';

import { clickableTagContainer } from './ClickableTag.style';

interface ClickableTagProps {
  children: React.ReactNode;
}

const ClickableTag = ({ children }: ClickableTagProps) => {
  return <div css={clickableTagContainer}>{children}</div>;
};

export default ClickableTag;
