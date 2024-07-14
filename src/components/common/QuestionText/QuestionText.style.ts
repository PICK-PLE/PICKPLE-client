import { css, Theme } from '@emotion/react';
import { flexGenerator } from '@styles/generator';

export const questionStyle = (theme: Theme) => css`
  ${flexGenerator('row', 'flex-start', 'center')}
  gap: 1rem;
  padding: 1.5rem 1rem;
  width: 100%;
  background-color: ${theme.color.background};
  border-radius: 10px;
`;

export const textStyle = (theme: Theme) => css`
  color: ${theme.color.blackgray};
  ${theme.font['head04-b-16']}
`;

