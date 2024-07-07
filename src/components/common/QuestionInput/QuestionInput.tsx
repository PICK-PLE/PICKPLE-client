import { HTMLAttributes } from 'react';
import { NumberLabel } from '@components';
import {
  questionInputStyle,
  inputStyle,
  iconStyle,
} from 'src/components/common/QuestionInput/QustionInput.style';

export interface QuestionInputProps extends HTMLAttributes<HTMLInputElement> {
  numberLabel: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const QuestionInput = ({ numberLabel, placeholder, value, onChange }: QuestionInputProps) => {
  return (
    <div css={questionInputStyle}>
      <div css={iconStyle}>
        <NumberLabel>{numberLabel}</NumberLabel>
      </div>
      <input css={inputStyle} value={value} onChange={onChange} placeholder={placeholder} />
    </div>
  );
};

export default QuestionInput;
