import { InputHTMLAttributes } from 'react';
import { NumberLabel } from '@components';
import {
  questionInputStyle,
  inputStyle,
  iconStyle,
  textLengthStyle,
} from 'src/components/common/QuestionInput/QuestionInput.style';

export interface QuestionInputProps extends InputHTMLAttributes<HTMLInputElement> {
  numberLabel: string;
  value: string;
}

const QuestionInput = ({
  numberLabel,
  placeholder,
  maxLength,
  value,
  onChange,
}: QuestionInputProps) => {
  return (
    <div css={questionInputStyle}>
      <div css={iconStyle}>
        <NumberLabel>{numberLabel}</NumberLabel>
      </div>
      <input
        css={inputStyle}
        value={value}
        maxLength={maxLength}
        onChange={onChange}
        placeholder={placeholder}
      />
      <span css={textLengthStyle}>{`${value.length}/${maxLength}`}</span>
    </div>
  );
};

export default QuestionInput;
