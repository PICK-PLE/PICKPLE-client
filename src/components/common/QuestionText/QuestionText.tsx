import { HTMLAttributes } from 'react';
import { NumberLabel } from '@components';
import { questionStyle, textStyle } from 'src/components/common/QuestionText/QuestionText.style';

export interface QuestionTextProps extends HTMLAttributes<HTMLDivElement> {
  numberLabel: string;
}

const QuestionText = ({ children, numberLabel, ...props }: QuestionTextProps) => {
  return (
    <div css={questionStyle} {...props}>
      <NumberLabel>{numberLabel}</NumberLabel>
      <p css={textStyle}>{children}</p>
    </div>
  );
};

export default QuestionText;
