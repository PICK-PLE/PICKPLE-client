import { SerializedStyles } from '@emotion/react';
import React, { InputHTMLAttributes, forwardRef, useState } from 'react';

import { IcDelete20 } from '@svg';

import {
  inputContainerStyle,
  inputLabelStyle,
  inputWrapperStyle,
  inputStyle,
  textLengthStyle,
  errorMessageStyle,
  errorAndLengthWrapper,
  deleteButtonStyle,
  labelAndInputWrapper,
} from './Input.style';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isValid?: boolean;
  inputLabel?: string;
  errorMessage?: string;
  isCountValue: boolean;
  customStyle?: SerializedStyles;
  customBorderColor?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      value,
      onChange,
      isValid,
      inputLabel,
      placeholder,
      errorMessage,
      maxLength = 10,
      isCountValue = false,
      customStyle,
      customBorderColor,
    },
    ref
  ) => {
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

    const handleInputDelete = (e: React.MouseEvent<HTMLDivElement>) => {
      e.preventDefault();
      onChange({ target: { value: '' } } as React.ChangeEvent<HTMLInputElement>);
      setMaxLengthError(false);
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

    const isError = maxLengthError || !isValid;
    const hasError = maxLengthError || (isFocused && !isValid);

    return (
      <div css={inputContainerStyle}>
        <div css={labelAndInputWrapper}>
          {inputLabel && <span css={inputLabelStyle}>{inputLabel}</span>}
          <div css={inputWrapperStyle}>
            <input
              ref={ref}
              css={[inputStyle(isError, isFocused, customBorderColor), customStyle]}
              placeholder={placeholder}
              value={value}
              onChange={handleInputChange}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
            />
            {isFocused && value.length > 0 && (
              <div css={deleteButtonStyle} onMouseDown={handleInputDelete}>
                <IcDelete20 />
              </div>
            )}
          </div>
        </div>
        <div css={errorAndLengthWrapper(hasError)}>
          {isFocused && displayErrorMessage ? (
            <span css={errorMessageStyle}>{displayErrorMessage}</span>
          ) : (
            <div></div>
          )}
          {isCountValue && (
            <span css={textLengthStyle(isError, isFocused)}>
              {value?.length}/{maxLength}
            </span>
          )}
        </div>
      </div>
    );
  }
);

export default Input;
