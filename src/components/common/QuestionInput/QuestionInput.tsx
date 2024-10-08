import { InputHTMLAttributes, useState } from 'react';

import { NumberLabel } from '@components';
import { IcDelete20 } from '@svg';
import {
  questionInputStyle,
  inputStyle,
  iconStyle,
  textLengthStyle,
  questionInputContainer,
} from 'src/components/common/QuestionInput/QuestionInput.style';

import { deleteButtonStyle, deleteIconStyle } from '../inputs/Input/Input.style';

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
  const [isFocused, setIsFocused] = useState(false);
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
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder}
        />
        {isFocused && value && value.length > 0 && (
          <div css={deleteButtonStyle} onMouseDown={handleInputDelete}>
            <span css={deleteIconStyle}>
              <IcDelete20 />
            </span>
          </div>
        )}
      </div>
      <span css={textLengthStyle}>{value ? `${value.length}/${maxLength}` : `0/${maxLength}`}</span>
    </div>
  );
};

export default QuestionInput;
