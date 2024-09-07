import { PropsWithChildren } from 'react';

import { reviewTagContainer } from './ReviewTag.style';

const ReviewTag = ({ children }: PropsWithChildren) => {
  return <div css={reviewTagContainer}>{children}</div>;
};

export default ReviewTag;
