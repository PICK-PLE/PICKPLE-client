import { css, Theme } from '@emotion/react';
import { flexGenerator } from '@styles/generator';

export const inputContainerStyle = css`
  ${flexGenerator('column', 'center', 'flex-start')}
  gap: 0.5rem;
`;

export const inputLabelStyle = (theme: Theme) => css`
  ${theme.font['subhead03-m-16']}
  position: relative;
  left: 0.5rem;
`;

export const inputWrapperStyle = css`
  ${flexGenerator('row', 'flex-start', 'center')}
  position: relative;
  width: 100%;
`;

export const inputStyle = (theme: Theme, isError: boolean) => css`
  min-width: 33.5rem;
  width: 100%;
  height: 5.2rem;
  padding: 1.5rem;
  border: 1px solid ${isError ? theme.color.error : theme.color.lightgray1};
  border-radius: 10px;

  color: ${isError ? theme.color.error : theme.color.darkgray};
  background-color: ${theme.color.white};
  ${theme.font['body01-r-15']}

  &::placeholder {
    color: ${theme.color.midgray1};
  }

  &:focus {
    outline: none;
  }
`;

export const textLengthStyle = (theme: Theme, isError: boolean) => css`
  position: absolute;
  right: 1.5rem;
  color: ${isError ? theme.color.error : theme.color.midgray1};
  ${theme.font['body02-r-14']}
`;

export const errorMessageStyle = (theme: Theme) => css`
  color: ${theme.color.error};
  ${theme.font['body05-r-10']};
`;
