import { Dispatch, SetStateAction, TextareaHTMLAttributes } from 'react';

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
  isError: boolean;
  setIsError: Dispatch<SetStateAction<boolean>>;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  errorMessage?: string;
  maxLength: number;
  size: 'small' | 'medium';
}
const TextArea = ({
  value,
  isError,
  setIsError,
  onChange,
  size = 'small',
  placeholder,
  errorMessage,
  maxLength,
}: TextAreaProps) => {
  // 글자 수 세서 바로 화면에 반영하는 onChange 함수 (default)
  const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.value.length <= maxLength) {
      onChange(e);
      setIsError(false);
    } else {
      setIsError(true);
    }
  };

  // TODO: constants 파일에 분리하기
  // 글자 수 에러 메시지
  const textLengthErrorMessage = `* 글자 수 ${maxLength}자 이하로 입력해주세요.`;

  return (
    <div css={textAreaContainerStyle}>
      <div css={[textAreaWrapperStyle(isError), textAreaWrapperSize[size]]}>
        <textarea
          css={textAreaStyle(isError)}
          value={value}
          onChange={handleTextAreaChange}
          placeholder={placeholder}
        />
        <span css={textLengthStyle(isError)}>
          {value.length}/{maxLength}
        </span>
      </div>

      {isError && value.length >= maxLength && (
        <span css={errorMessageStyle}>{textLengthErrorMessage}</span>
      )}

      {isError && value.length < maxLength && <span css={errorMessageStyle}>{errorMessage}</span>}
    </div>
  );
};

export default TextArea;
