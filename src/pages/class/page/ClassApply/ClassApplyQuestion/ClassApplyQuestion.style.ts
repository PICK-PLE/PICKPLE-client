import { css, Theme } from '@emotion/react';
import { flexGenerator } from '@styles/generator';

export const questionArticleLayout = css`
${flexGenerator('column', 'flex-start', 'flex-start')}
  padding: 3.2rem 2rem 3rem 2rem;
  width: 100%;
  min-height: calc(100dvh - 6.3rem);
`;

export const questionWrapperStyle = css`
${flexGenerator('column', 'flex-start', 'flex-start')}
gap: 3.6rem;
`;

export const questionSpanStyle = (theme: Theme) => css`
  color: ${theme.color.purple2};
  ${theme.font['subhead05-sb-14']}
`;

export const questionHStyle = (theme: Theme) => css`
  color: ${theme.color.black};
  ${theme.font['head01-b-22']}
`;