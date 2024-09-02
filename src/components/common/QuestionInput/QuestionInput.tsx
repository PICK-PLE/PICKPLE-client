import { InputHTMLAttributes } from 'react';

import { NumberLabel } from '@components';
import {
  questionInputStyle,
  inputStyle,
  iconStyle,
  textLengthStyle,
  questionInputContainer,
} from 'src/components/common/QuestionInput/QuestionInput.style';
import { IcDelete20 } from '@svg';
import { deleteButtonStyle } from '../inputs/Input/Input.style';

export interface QuestionInputProps extends InputHTMLAttributes<HTMLInputElement> {
  numberLabel: string;
  value?: string;
  maxLength: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const QuestionInput = ({
  numberLabel,
  placeholder,
  maxLength,
  value,
  onChange,
}: QuestionInputProps) => {
  const handleQuestionInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length < maxLength + 1) {
      onChange(e);
    }
  };

  const handleInputDelete = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    onChange({ target: { value: '' } } as React.ChangeEvent<HTMLInputElement>);
  };

  return (
    <div css={questionInputContainer}>
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
        <div css={deleteButtonStyle} onMouseDown={handleInputDelete}>
          <IcDelete20 />
        </div>
      </div>
      <span css={textLengthStyle}>{value ? `${value.length}/${maxLength}` : `0/${maxLength}`}</span>
    </div>
  );
};

export default QuestionInput;
