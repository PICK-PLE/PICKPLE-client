import { css, Theme } from '@emotion/react';
import { flexGenerator } from '@styles/generator';

export const inputWrapperStyle = css`
  ${flexGenerator('row', 'first', 'center')}
  position: relative;
  margin: 0 2rem;
`;

export const inputStyle = (theme: Theme) => css`
  min-width: 33.5rem;
  width: 100%;
  height: 5.2rem;
  padding: 1.5rem;
  border: 1px solid ${theme.color.lightgray1};
  border-radius: 10px;

  color: ${theme.color.darkgray};
  background-color: ${theme.color.white};
  ${theme.font['body01-r-15']}

  &::placeholder {
    color: ${theme.color.midgray1};
  }

  &:focus {
    outline: none;
  }
`;

export const textLengthStyle = (theme: Theme) => css`
  position: absolute;
  right: 1.5rem;
  color: ${theme.color.midgray1};
  ${theme.font['body02-r-14']}
`;
