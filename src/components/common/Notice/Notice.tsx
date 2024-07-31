import { HTMLAttributes } from 'react';

import { noticeStyle, textStyle } from 'src/components/common/Notice/Notice.style';

import { NumberLabel } from '@components';

export interface NoticeProps extends HTMLAttributes<HTMLDivElement> {
  numberLabel: string;
}

const Notice = ({ children, numberLabel, ...props }: NoticeProps) => {
  return (
    <div css={noticeStyle} {...props}>
      <NumberLabel>{numberLabel}</NumberLabel>
      <p css={textStyle}>{children}</p>
    </div>
  );
};

export default Notice;
