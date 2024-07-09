import { useTheme } from '@emotion/react';
import { iconWrapperStyle, labelStyle, labelVariant } from './Label.style';
interface LabelProps {
  variant: 'status' | 'dDay' | 'category' | 'textCount';
  children: React.ReactNode;
  icon?: React.ReactNode;
}

const Label = ({ children, variant, icon }: LabelProps) => {
  const theme = useTheme();
  return (
    <aside css={[labelStyle, labelVariant(theme)[variant]]}>
      {icon ? <span css={iconWrapperStyle}>{icon}</span> : null}
      {children}
    </aside>
  );
};

export default Label;
