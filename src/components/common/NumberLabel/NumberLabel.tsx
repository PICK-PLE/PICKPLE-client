import { PropsWithChildren } from 'react';

import { IcNumberLabel } from '@svg';

import { wrapperStyle, textStyle } from './NumberLabel.style';

const NumberLabel = ({ children, ...props }: PropsWithChildren) => {
  return (
    <div css={wrapperStyle} {...props}>
      <IcNumberLabel />
      <span css={textStyle}>{children}</span>
    </div>
  );
};

export default NumberLabel;
