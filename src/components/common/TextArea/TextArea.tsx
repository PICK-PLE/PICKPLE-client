import { HTMLAttributes, useState } from 'react';
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
  placeholder: string;
  errorMessage?: string;
  maxTextLength: number;
  error?: boolean;
  size: 'small' | 'medium';
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}
const TextArea = ({
  size = 'small',
  placeholder,
  errorMessage,
  maxTextLength,
  error,
  onChange,
}: TextAreaProps) => {
  const [value, setValue] = useState('');
  const [isError, setIsError] = useState(false); // 외부에서 들어오는 에러 감지
  const [isTextLengthError, setIsTextLengthError] = useState(false); // 글자 수 에러 감지

  // 글자 수 세서 바로 화면에 반영하는 onChange 함수 (default)
  const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
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

    if (onChange) {
      onChange(e);
    }
  };

  // 글자 수 세는 함수
  const getTextLength = () => {
    return value.length;
  };

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

export default TextArea;
