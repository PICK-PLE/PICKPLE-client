import { css, Theme } from '@emotion/react';

import { flexGenerator } from '@styles/generator';

export const depositArticleLayout = css`
  ${flexGenerator('column', 'flex-start', 'flex-start')}
  gap: 5.4rem;
  padding: 3.2rem 2rem 3rem 2rem;
  width: 100%;
  min-height: calc(100dvh - 6.3rem);
`;

export const dipositWrapperStyle = css`
  ${flexGenerator('column', 'flex-start', 'flex-start')}
  gap: 3.8rem;
  width: 100%;
`;

export const depositHeaderStyle = css`
  ${flexGenerator('column', 'flex-start', 'flex-start')}
  gap: 0.3rem;
`;

export const depositSpanStyle = (theme: Theme) => css`
  color: ${theme.color.purple2};
  ${theme.font['subhead05-sb-14']}
`;

export const depositHStyle = (theme: Theme) => css`
  color: ${theme.color.black};
  ${theme.font['head01-b-22']}
`;

export const depositMainStyle = css`
  width: 100%;
`;

export const depositFooterStyle = css`
  ${flexGenerator('column', 'flex-start', 'center')}
  gap: 1.5rem;
  width: 100%;
  margin-top: auto;
`;
