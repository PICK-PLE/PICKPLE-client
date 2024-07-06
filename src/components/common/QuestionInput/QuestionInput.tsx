import { HTMLAttributes, useState } from 'react';
import { NumberLabel } from '@components';
import {
  questionInputStyle,
  inputStyle,
  iconStyle,
} from 'src/components/common/QuestionInput/QustionInput.style';

export interface QuestionInputProps extends HTMLAttributes<HTMLInputElement> {
  numberLabel: string;
  placeholder: string;
}

const QuestionInput = ({ numberLabel, placeholder, ...props }: QuestionInputProps) => {
  const [value, setValue] = useState('');
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div css={questionInputStyle} {...props}>
      <div css={iconStyle}>
        <NumberLabel>{numberLabel}</NumberLabel>
      </div>
      <input
        css={inputStyle}
        value={value}
        onChange={handleInputChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default QuestionInput;
