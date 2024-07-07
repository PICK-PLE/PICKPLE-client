import { HTMLAttributes, useState } from 'react';
import {
  inputContainerStyle,
  inputLabelStyle,
  inputWrapperStyle,
  inputStyle,
  textLengthStyle,
  errorMessageStyle,
} from 'src/components/common/inputs/Input/Input.style';
import { useTheme } from '@emotion/react';

export interface InputProps extends HTMLAttributes<HTMLInputElement> {
  inputLabel?: string;
  placeholder: string;
  errorMessage?: string;
  maxTextLength: number;
  error?: boolean;
}

const Input = ({
  inputLabel,
  placeholder,
  errorMessage,
  maxTextLength,
  error,
  ...props
}: InputProps) => {
  const [value, setValue] = useState('');
  const [isError, setIsError] = useState(false); // 외부에서 들어오는 에러 감지
  const [isTextLengthError, setIsTextLengthError] = useState(false); // 글자 수 에러 감지

  // 글자 수 세서 바로 화면에 반영하는 onChange 함수 (default)
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value.slice(0, maxTextLength)); // 최대 길이 넘어가면 잘리게.

    if (error) {
      setIsError(true);
    } else {
      setIsError(false);
    }

    if (e.target.value.length > maxTextLength) {
      setIsTextLengthError(true);
    } else {
      setIsTextLengthError(false);
    }
  };

  // 글자 수 세는 함수
  const getTextLength = () => {
    return value.length;
  };

  // 글자 수 에러 메시지
  const textLengthErrorMessage = `* 글자 수 ${maxTextLength} 이하로 입력해주세요.`;

  const theme = useTheme();
  return (
    <div css={inputContainerStyle} {...props}>
      <span css={inputLabelStyle}>{inputLabel}</span>
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

      {isTextLengthError ? (
        <span css={errorMessageStyle}>{textLengthErrorMessage} </span>
      ) : isError ? (
        <span css={errorMessageStyle}>{errorMessage} </span>
      ) : null}
    </div>
  );
};

export default Input;
