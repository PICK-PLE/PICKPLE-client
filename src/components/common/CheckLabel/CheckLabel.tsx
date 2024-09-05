import { IcCheckActive, IcCheckDefault } from '@svg';
import { checkLabelWrapper, iconWrapperStyle, inputStyle, textStyle } from './CheckLabel.style';
import { LabelHTMLAttributes } from 'react';
interface CheckLabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
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
