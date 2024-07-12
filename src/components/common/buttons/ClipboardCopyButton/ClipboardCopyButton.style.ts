import { Theme, css } from '@emotion/react';
import { flexGenerator } from '@styles/generator';

export const buttonWrapperStyle = (theme: Theme) => css`
  ${flexGenerator()}
  gap: 0.4rem;

  padding: 0;

  color: ${theme.color.darkgray};
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`;

export const accountNumberStyle = (theme: Theme) => css`
  border-bottom: 1px solid ${theme.color.darkgray};

  ${theme.font['body01-r-15']}
`;

export const iconStyle = css`
  width: 1.8rem;
  height: 1.8rem;
`;
