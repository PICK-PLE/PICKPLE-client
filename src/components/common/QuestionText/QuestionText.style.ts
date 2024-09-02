import { css, Theme } from '@emotion/react';
import { flexGenerator } from '@styles/generator';

export const questionStyle = (theme: Theme) => css`
  ${flexGenerator('row', 'flex-start', 'center')}
  gap: 1rem;
  padding: 1.5rem 1rem;
  width: 100%;
  background-color: ${theme.color.bg_white1};
  border-radius: 10px;
`;

export const textStyle = (theme: Theme) => css`
  color: ${theme.color.black};
  ${theme.font['subhead02-sb-16']}

  word-break: break-word;
`;

export const preventDragStyle = css`
  user-select: none;
`;

