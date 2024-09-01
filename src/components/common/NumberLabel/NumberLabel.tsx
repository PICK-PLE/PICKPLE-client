import { PropsWithChildren } from 'react';

import { IcNumberLabel } from '@svg';
import {
  wrapperStyle,
  iconStyle,
  textStyle,
} from 'src/components/common/NumberLabel/NumberLabel.style';

const NumberLabel = ({ children, ...props }: PropsWithChildren) => {
  return (
    <div css={wrapperStyle} {...props}>
      <IcNumberLabel css={iconStyle} />
      <span css={textStyle}>{children}</span>
    </div>
  );
};

export default NumberLabel;
