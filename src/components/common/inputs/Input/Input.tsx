import { HTMLAttributes, useState } from 'react';
import {
  inputContainerStyle,
  inputWrapperStyle,
  inputStyle,
  textLengthStyle,
  errorMessageStyle,
} from 'src/components/common/inputs/Input/Input.style';
import { useTheme } from '@emotion/react';

export interface InputProps extends HTMLAttributes<HTMLInputElement> {
  placeholder: string;
  errorMessage: string;
  maxTextLength: number;
  error: boolean;
}

const Input = ({ placeholder, errorMessage, maxTextLength, error, ...props }: InputProps) => {
  const [value, setValue] = useState('');
  const [isError, setIsError] = useState(false);

  // 글자 수 세서 바로 화면에 반영하는 onChange 함수
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value.slice(0, maxTextLength)); // 최대 길이 넘어가면 잘리게.

    if (error) {
      setIsError(true);
    } else {
      setIsError(false);
    }
  };

  // 글자 수 세는 함수
  const getTextLength = () => {
    return value.length;
  };

  const theme = useTheme();

  return (
    <div css={inputContainerStyle} {...props}>
      <div css={inputWrapperStyle}>
        <input
          css={[inputStyle(theme, isError)]}
          placeholder={placeholder}
          value={value}
          onChange={handleInputChange}
        />
        <span css={textLengthStyle(theme, isError)}>
          {getTextLength()}/{maxTextLength}
        </span>
      </div>

      {isError ? <span css={errorMessageStyle}>{errorMessage}</span> : null}
    </div>
  );
};

export default Input;
