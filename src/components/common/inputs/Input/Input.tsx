import { InputHTMLAttributes, useState } from 'react';
import {
  inputContainerStyle,
  inputLabelStyle,
  inputWrapperStyle,
  inputStyle,
  textLengthStyle,
  errorMessageStyle,
} from 'src/components/common/inputs/Input/Input.style';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isValid: boolean;
  inputLabel?: string;
  errorMessage?: string;
  isCountValue?: boolean;
}

const Input = ({
  value,
  onChange,
  isValid,
  inputLabel,
  placeholder,
  errorMessage,
  maxLength = 10,
  isCountValue = false,
}: InputProps) => {
  const [maxLengthError, setMaxLengthError] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  // 글자 수 세서 바로 화면에 반영하는 onChange + 외부 onChange
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (isCountValue) {
      if (e.target.value.length <= maxLength) {
        onChange(e);
        setMaxLengthError(false);
      } else {
        setMaxLengthError(true);
      }
    } else {
      onChange(e);
    }
  };

  // TODO: constants 파일에 분리하기!
  // 글자 수 에러 메시지
  const textLengthErrorMessage = `* 글자 수 ${maxLength} 이하로 입력해주세요.`;

  // 에러 메시지를 결정하는 로직
  let displayErrorMessage: string | undefined;
  if (maxLengthError) {
    displayErrorMessage = textLengthErrorMessage;
  } else if (!isValid) {
    displayErrorMessage = errorMessage;
  }

  return (
    <div css={inputContainerStyle}>
      {inputLabel && <span css={inputLabelStyle}>{inputLabel}</span>}
      <div css={inputWrapperStyle}>
        <input
          css={[inputStyle(maxLengthError)]}
          placeholder={placeholder}
          value={value}
          onChange={handleInputChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        {isCountValue ? (
          <span css={textLengthStyle(maxLengthError)}>
            {value.length}/{maxLength}
          </span>
        ) : (
          ''
        )}
      </div>
      {isFocused && displayErrorMessage && (
        <span css={errorMessageStyle}>{displayErrorMessage}</span>
      )}
    </div>
  );
};

export default Input;
