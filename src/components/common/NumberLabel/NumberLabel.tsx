import { PropsWithChildren } from 'react';
import { wrapperStyle, textStyle } from 'src/components/common/NumberLabel/NumberLabel.style';

const NumberLabel = ({ children, ...props }: PropsWithChildren) => {
  return (
    <div css={wrapperStyle} {...props}>
      <span css={textStyle}>{children}</span>
    </div>
  );
};

export default NumberLabel;
