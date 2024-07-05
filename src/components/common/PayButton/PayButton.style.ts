import { Theme } from '@emotion/react';
import { css } from '@emotion/react';
import { flexGenerator } from '@styles/generator';

export const payButtonStyle = (theme: Theme) => css`
  ${flexGenerator('column')}
  width: 12.2rem;
  height: 8.6rem;
  padding: 1.8rem 1rem;
  gap: 0.5rem;

  border: 1px solid ${theme.color.lightgray2};
  outline: none;
  border-radius: 10px;
  background-color: transparent;
  cursor: pointer;
`;

export const paySpanStyle = (theme: Theme) => css`
  ${theme.font['body02-r-14']};
`;
