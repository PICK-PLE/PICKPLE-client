import { HTMLAttributes } from 'react';
import { useTheme } from '@emotion/react';
import { Dispatch, SetStateAction } from 'react';
import {
  inputContainerStyle,
  inputLabelStyle,
  inputWrapperStyle,
  inputStyle,
  textLengthStyle,
  errorMessageStyle,
} from 'src/components/common/inputs/Input/Input.style';

export interface InputProps extends HTMLAttributes<HTMLInputElement> {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputLabel?: string;
  placeholder: string;
  errorMessage?: string;
  maxTextLength: number;
  isError: boolean;
  setIsError: Dispatch<SetStateAction<boolean>>;
}

const Input = ({
  value,
  setValue,
  onChange,
  inputLabel,
  placeholder,
  errorMessage,
  maxTextLength,
  isError = false,
  setIsError,
}: InputProps) => {
  // 글자 수 세서 바로 화면에 반영하는 onChange + 외부 onChange
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length <= maxTextLength) {
      onChange(e);
    } else {
      setValue(value.slice(0, maxTextLength));
      setIsError(true);
    }
  };

  // TODO: constants 파일에 분리하기!
  // 글자 수 에러 메시지
  const textLengthErrorMessage = `* 글자 수 ${maxTextLength} 이하로 입력해주세요.`;

  const theme = useTheme();
  return (
    <div css={inputContainerStyle}>
      <span css={inputLabelStyle}>{inputLabel}</span>
      <div css={inputWrapperStyle}>
        <input
          css={[inputStyle(theme, isError)]}
          placeholder={placeholder}
          value={value}
          onChange={handleInputChange}
        />
        <span css={textLengthStyle(theme, isError)}>
          {value.length}/{maxTextLength}
        </span>
      </div>

      {isError && value.length >= maxTextLength && (
        <span css={errorMessageStyle}>{textLengthErrorMessage}</span>
      )}

      {isError && value.length < maxTextLength && (
        <span css={errorMessageStyle}>{errorMessage}</span>
      )}
    </div>
  );
};

export default Input;
