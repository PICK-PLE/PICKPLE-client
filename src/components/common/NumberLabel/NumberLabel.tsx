import { IcNumberLabel } from '@svg';

import { wrapperStyle, textStyle } from './NumberLabel.style';

interface NumberLabelProps {
  withIcon?: boolean;
  children: React.ReactNode;
}

const NumberLabel = ({ withIcon = false, children, ...props }: NumberLabelProps) => {
  return (
    <div css={wrapperStyle} {...props}>
      {withIcon && <IcNumberLabel />}
      <span css={textStyle}>{children}</span>
    </div>
  );
};

export default NumberLabel;
