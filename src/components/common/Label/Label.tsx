import { useTheme } from '@emotion/react';
import { iconWrapperStyle, labelSize, labelStyle, labelVariant } from './Label.style';
interface LabelProps {
  variant: 'status' | 'dDay' | 'category' | 'textCount';
  size?: 'small' | 'large';
  status?: '입금 대기' | '승인 대기' | '승인 완료' | '승인 거절' | '환불 완료';
  children: React.ReactNode;
  icon?: React.ReactNode;
}

const Label = ({ children, variant, icon, size }: LabelProps) => {
  const theme = useTheme();
  return (
    <aside css={[labelStyle, labelVariant(theme)[variant], size && labelSize[size]]}>
      {icon ? <span css={iconWrapperStyle}>{icon}</span> : null}
      {children}
    </aside>
  );
};

export default Label;
