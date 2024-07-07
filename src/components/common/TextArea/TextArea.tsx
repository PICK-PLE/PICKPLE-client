import { HTMLAttributes, Dispatch, SetStateAction } from 'react';
import { useTheme } from '@emotion/react';
import {
  textAreaStyle,
  textLengthStyle,
  errorMessageStyle,
  textAreaWrapperStyle,
  textAreaWrapperSize,
  textAreaContainerStyle,
} from 'src/components/common/TextArea/TextArea.style';

export interface TextAreaProps extends HTMLAttributes<HTMLTextAreaElement> {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  isError: boolean;
  setIsError: Dispatch<SetStateAction<boolean>>;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder: string;
  errorMessage?: string;
  maxTextLength: number;
  size: 'small' | 'medium';
}
const TextArea = ({
  value,
  setValue,
  isError,
  setIsError,
  onChange,
  size = 'small',
  placeholder,
  errorMessage,
  maxTextLength,
}: TextAreaProps) => {
  // 글자 수 세서 바로 화면에 반영하는 onChange 함수 (default)
  const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.value.length <= maxTextLength) {
      onChange(e);
    } else {
      setValue(value.slice(0, maxTextLength));
      setIsError(true);
    }
  };

  // TODO: constants 파일에 분리하기
  // 글자 수 에러 메시지
  const textLengthErrorMessage = `* 글자 수 ${maxTextLength}자 이하로 입력해주세요.`;

  const theme = useTheme();
  return (
    <div css={textAreaContainerStyle}>
      <div css={[textAreaWrapperStyle(theme, isError), textAreaWrapperSize[size]]}>
        <textarea
          css={textAreaStyle(theme, isError)}
          value={value}
          onChange={handleTextAreaChange}
          placeholder={placeholder}
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

export default TextArea;
