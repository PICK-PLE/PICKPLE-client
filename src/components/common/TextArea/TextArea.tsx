import { TextareaHTMLAttributes, useState } from 'react';

import {
  textAreaStyle,
  textLengthStyle,
  errorMessageStyle,
  textAreaWrapperStyle,
  textAreaWrapperSize,
  textAreaContainerStyle,
} from 'src/components/common/TextArea/TextArea.style';

export interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  isValid: boolean;
  errorMessage?: string;
  maxLength: number;
  size?: 'small' | 'medium';
}
const TextArea = ({
  value,
  onChange,
  isValid,
  size = 'small',
  placeholder,
  errorMessage,
  maxLength,
}: TextAreaProps) => {
  const [maxLengthError, setMaxLengthError] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  // 글자 수 세서 바로 화면에 반영하는 onChange 함수 (default)
  const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.value.length <= maxLength) {
      onChange(e);
      setMaxLengthError(false);
    } else {
      setMaxLengthError(true);
    }
  };

  // TODO: constants 파일에 분리하기
  // 글자 수 에러 메시지
  const textLengthErrorMessage = `* 글자 수 ${maxLength}자 이하로 입력해주세요.`;

  return (
    <div css={textAreaContainerStyle}>
      <div css={[textAreaWrapperStyle(maxLengthError), textAreaWrapperSize[size]]}>
        <textarea
          css={textAreaStyle(maxLengthError)}
          value={value}
          onChange={handleTextAreaChange}
          placeholder={placeholder}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        <span css={textLengthStyle(maxLengthError)}>
          {value.length}/{maxLength}
        </span>
      </div>

      {maxLengthError && <span css={errorMessageStyle}>{textLengthErrorMessage}</span>}

      {isFocused && !isValid && <span css={errorMessageStyle}>{errorMessage}</span>}
    </div>
  );
};

export default TextArea;
