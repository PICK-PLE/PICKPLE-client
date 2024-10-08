import { css, Theme } from '@emotion/react';

import { flexGenerator } from '@styles/generator';

export const textAreaContainerStyle = css`
  ${flexGenerator('column', 'center', 'flex-start')}
  gap: 0.3rem;
  width: 100%;
`;

export const textAreaWrapperStyle = (isError: boolean, isFocused: boolean) => (theme: Theme) => css`
  ${flexGenerator('column', 'space-between', 'flex-end')}
  width: 100%;
  min-width: 33.5rem;
  padding: 1.2rem 1.5rem;

  border: 1px solid
    ${isError && isFocused
      ? theme.color.error
      : isFocused
        ? theme.color.purple1
        : theme.color.lightgray1};
  border-radius: 10px;
  background-color: ${theme.color.white};
`;

export const textAreaWrapperSize = {
  small: css`
    height: 9rem;
  `,

  medium: css`
    height: 17.6rem;
  `,
};

export const textAreaStyle = (theme: Theme) => css`
  border: none;
  width: 100%;
  height: 100%;
  resize: none;
  padding: 0;

  color: ${theme.color.blackgray};
  background-color: ${theme.color.white};
  ${theme.font['body06-m-15']};

  &::placeholder {
    color: ${theme.color.midgray1};
    ${theme.font['body06-m-15']}
  }

  &:focus {
    outline: none;
  }
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
