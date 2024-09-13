import { Theme, css } from '@emotion/react';

import { flexGenerator } from '@styles/generator';

export const articleContainer = css`
  ${flexGenerator('column', 'flex-start', 'flex-start')};
  gap: 1rem;
  padding-top: 3.8rem;
`;

export const articleTitle = (theme: Theme) => css`
  color: ${theme.color.blackgray};
  ${theme.font['subhead01-sb-18']}
`;

export const articleCotent = (theme: Theme) => css`
  color: ${theme.color.midgray2};
  ${theme.font['body07-r-15']}
  white-space: pre-wrap;
`;
