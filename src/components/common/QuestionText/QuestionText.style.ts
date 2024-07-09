import { css, Theme } from '@emotion/react';
import { flexGenerator } from '@styles/generator';

export const questionStyle = (theme: Theme) => css`
  ${flexGenerator('row', 'flex-start', 'center')}
  gap: 1rem;
  padding: 1rem;
  background-color: ${theme.color.background};
  border-radius: 10px;
`;

export const textStyle = (theme: Theme) => css`
  color: ${theme.color.black};
  ${theme.font['head04-b-16']}
`;
