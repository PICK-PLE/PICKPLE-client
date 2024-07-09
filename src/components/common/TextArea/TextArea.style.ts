import { css, Theme } from '@emotion/react';
import { flexGenerator } from '@styles/generator';

export const textAreaContainerStyle = css`
  ${flexGenerator('column', 'center', 'flex-start')}
  gap: 0.5rem;
`;

export const textAreaWrapperStyle = (maxLengthError: boolean) => (theme: Theme) =>
  css`
    ${flexGenerator('column', 'space-between', 'flex-end')}
    width: 100%;
    min-width: 33.5rem;
    padding: 1.2rem 1.6rem;

    border: 1px solid ${maxLengthError ? theme.color.error : theme.color.lightgray1};
    border-radius: 10px;
  `;

export const textAreaWrapperSize = {
  small: css`
    height: 9rem;
  `,

  medium: css`
    height: 17.6rem;
  `,
};

export const textAreaStyle = (maxLengthError: boolean) => (theme: Theme) =>
  css`
    border: none;
    width: 100%;
    height: 100%;
    resize: none;

    color: ${maxLengthError ? theme.color.error : theme.color.darkgray};
    background-color: ${theme.color.white};
    ${theme.font['body01-r-15']};

    &::placeholder {
      color: ${theme.color.midgray1};
    }

    &:focus {
      outline: none;
    }
  `;

export const textLengthStyle = (maxLengthError: boolean) => (theme: Theme) =>
  css`
    right: 1.5rem;
    bottom: 1.2rem;
    color: ${maxLengthError ? theme.color.error : theme.color.midgray1};
    ${theme.font['body02-r-14']}
  `;

export const errorMessageStyle = (theme: Theme) => css`
  color: ${theme.color.error};
  ${theme.font['body05-r-10']};
`;
