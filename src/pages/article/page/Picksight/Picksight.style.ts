import { Theme, css } from '@emotion/react';

import { flexGenerator } from '@styles/generator';

export const articleMain = css`
  min-height: 100dvh;
  padding-top: 6rem;
  margin-bottom: 5.4rem;
`;

export const articleHeader = (theme: Theme) => css`
  ${flexGenerator('column')};
  border-top: 1px solid ${theme.color.lightgray1};
  padding: 3.8rem;
`;

export const articleH2 = (theme: Theme) => css`
  ${theme.font['subhead02-sb-16']}
  color: ${theme.color.blackgray};
`;
export const articleH1 = (theme: Theme) => css`
  ${theme.font['head01-b-22']}
  font-size: 2.6rem;
  color: ${theme.color.blackgray};
`;

export const articleSubtitle = (theme: Theme) => css`
  margin: 6rem 2rem 2rem;
  ${theme.font['subhead01-sb-18']}
`;

export const articleStrong = (theme: Theme) => css`
  color: ${theme.color.purple1};
`;

export const buttonIcon = css`
  width: 2.4rem;
  height: 2.4rem;
`;

export const paragraphStyle = css`
  ${flexGenerator('column', 'flex-start', 'flex-start')};
  gap: 2rem;
  padding: 0 2rem;
`;
