import { HTMLAttributes, useState } from 'react';
import {
  inputWrapperStyle,
  inputStyle,
  textLengthStyle,
} from 'src/components/common/inputs/Input/Input.style';

export interface InputProps extends HTMLAttributes<HTMLInputElement> {
  placeholder: string;
  errorMessage: string;
  maxTextLength: number;
}

const Input = ({ placeholder, errorMessage, maxTextLength, ...props }: InputProps) => {
  const [value, setValue] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const getTextLength = () => {
    return value.length;
  };

  return (
    <div>
      <div css={inputWrapperStyle}>
        <input
          css={inputStyle}
          placeholder={placeholder}
          value={value}
          onChange={handleInputChange}
        />
        <span css={textLengthStyle}>
          {getTextLength()}/{maxTextLength}
        </span>
      </div>

      <span>{errorMessage}</span>
    </div>
  );
};

export default Input;
