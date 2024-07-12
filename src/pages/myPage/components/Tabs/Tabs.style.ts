import { Theme, css } from '@emotion/react';
import { flexGenerator } from '@styles/generator';

export const userDistinguishWrapper = css`
  ${flexGenerator('row', 'flex-start', 'flex-start')};
  padding-left: 2rem;
  gap: 2rem;
`;

export const userSelectedTextStyle = (theme: Theme) => css`
  color: ${theme.color.black};
  ${theme.font['head03-b-18']}

  cursor: pointer;
`;

export const userUnselectedTextStyle = (theme: Theme) => css`
  color: ${theme.color.lightgray2};
  ${theme.font['head03-b-18']}

  cursor: pointer;
`;
