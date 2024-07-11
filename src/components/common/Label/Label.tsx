import { iconWrapperStyle, labelStyle, labelVariant } from './Label.style';
interface LabelProps {
  variant: 'status' | 'dDay' | 'category' | 'count' | 'countBlack' | 'textCount';
  children: React.ReactNode;
  icon?: React.ReactNode;
}

const Label = ({ children, variant, icon }: LabelProps) => {
  return (
    <div css={[labelStyle, labelVariant[variant]]}>
      {icon ? <span css={iconWrapperStyle}>{icon}</span> : null}
      {children}
    </div>
  );
};

export default Label;
