import { css, Theme } from '@emotion/react';

import { flexGenerator } from '@styles/generator';

export const inputContainerStyle = css`
  ${flexGenerator('column', 'center', 'flex-start')}
  gap: 0.3rem;
  width: 100%;
`;

export const labelAndInputWrapper = css`
  ${flexGenerator('column', 'center', 'flex-start')}
  gap: 0.8rem;
  width: 100%;
  /* min-width: 33.5rem; 삭제 모달 내 input 크기를 위해 주석처리 */
`;

export const inputLabelStyle = (theme: Theme) => css`
  color: ${theme.color.midgray2};
  ${theme.font['subhead05-sb-14']}
  padding: 0 0.5rem;
`;

export const inputWrapperStyle = css`
  ${flexGenerator('row', 'flex-start', 'center')}
  width: 100%;
  height: 5.2rem;
  position: relative;
`;

export const inputStyle =
  (isError: boolean, isFocused: boolean, customBorderColor?: string) => (theme: Theme) => css`
    width: 100%;
    height: 5.2rem;
    padding: 1.5rem;
    padding-right: 3.8rem;
    border: 1px solid
      ${isError && isFocused
        ? theme.color.error
        : isFocused
          ? theme.color.purple1
          : theme.color.lightgray1};
    border-radius: 10px;

    color: ${theme.color.blackgray};
    background-color: ${theme.color.white};
    ${theme.font['body06-m-15']}

    &::placeholder {
      color: ${theme.color.midgray1};
      ${theme.font['body06-m-15']}
    }

    &:focus {
      outline: none;
    }
    &:focus-within {
      ${customBorderColor && !isError
        ? `border: 1px solid ${theme.color.purple1} `
        : `${theme.color.error}`}
    }
  `;

export const deleteButtonStyle = css`
  ${flexGenerator()};
  position: absolute;
  top: 50%;
  right: 1.1rem;
  width: 3rem;
  height: 3rem;
  cursor: pointer;
  transform: translateY(-50%);
`;
export const deleteIconStyle = css`
  width: 1.8rem;
  height: 1.8rem;
`;

export const errorAndLengthWrapper = (hasError: boolean) => css`
  ${flexGenerator('row', `${hasError ? 'space-between' : 'flex-end'}`, 'center')}
  width: 100%;
`;

export const textLengthStyle = (isError: boolean, isFocused: boolean) => (theme: Theme) => css`
  color: ${isError && isFocused ? theme.color.error : theme.color.midgray1};
  ${theme.font['body02-r-14']}
`;

export const errorMessageStyle = (theme: Theme) => css`
  color: ${theme.color.error};
  ${theme.font['body03-r-12']};
`;
