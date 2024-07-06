import { HTMLAttributes, ReactNode } from 'react';
import NumberLabel from 'src/components/common/NumberLabel/NumberLabel';
import { noticeStyle } from 'src/components/common/Notice/Notice.style';
import { textStyle } from 'src/components/common/Notice/Notice.style';

export interface NoticeProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
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
