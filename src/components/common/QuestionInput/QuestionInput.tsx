import { Dispatch, HTMLAttributes, SetStateAction } from 'react';
import { NumberLabel } from '@components';
import {
  questionInputStyle,
  inputStyle,
  iconStyle,
} from 'src/components/common/QuestionInput/QustionInput.style';

export interface QuestionInputProps extends HTMLAttributes<HTMLInputElement> {
  numberLabel: string;
  placeholder: string;
  maxTextLength: number;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const QuestionInput = ({
  numberLabel,
  placeholder,
  maxTextLength,
  value,
  setValue,
  onChange,
}: QuestionInputProps) => {
  const handleQuestionInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(value.length);

    if (e.target.value.length < maxTextLength) {
      onChange(e);
    } else {
      setValue(value.slice(0, maxTextLength));
    }
  };

  return (
    <div css={questionInputStyle}>
      <div css={iconStyle}>
        <NumberLabel>{numberLabel}</NumberLabel>
      </div>
      <input
        css={inputStyle}
        value={value}
        onChange={handleQuestionInputChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default QuestionInput;
