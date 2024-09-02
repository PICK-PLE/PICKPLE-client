import React from 'react';

import { reviewTagContainer } from './ReviewTag.style';

interface ReviewTagProps {
  children: React.ReactNode;
}

const ReviewTag = ({ children }: ReviewTagProps) => {
  return <div css={reviewTagContainer}>{children}</div>;
};

export default ReviewTag;
