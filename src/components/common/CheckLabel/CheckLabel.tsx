import { IcCheckActive, IcCheckDefault } from '@svg';
import { checkLabelWrapper, iconWrapperStyle, inputStyle, textStyle } from './CheckLabel.style';
interface CheckLabelProps extends React.HTMLAttributes<HTMLLabelElement> {
  isChecked: boolean;
  text: string;
}

const CheckLabel = ({ isChecked, text, onClick }: CheckLabelProps) => {
  return (
    <>
      <input id={'CheckLabelInput'} type="checkbox" checked={isChecked} css={inputStyle} />
      <label htmlFor="CheckLabelInput" css={checkLabelWrapper} onClick={onClick}>
        <span css={iconWrapperStyle}>{isChecked ? <IcCheckActive /> : <IcCheckDefault />} </span>
        <span css={textStyle}>{text}</span>
      </label>
    </>
  );
};

export default CheckLabel;
