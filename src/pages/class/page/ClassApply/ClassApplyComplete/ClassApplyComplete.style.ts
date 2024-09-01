import { css, Theme } from '@emotion/react';

import { flexGenerator } from '@styles/generator';

export const completeArticleLayout = css`
  ${flexGenerator('column', 'flex-start', 'flex-start')}
  gap: 8rem;
  padding: 3.2rem 2rem 3rem 2rem;
  width: 100%;
  min-height: calc(100dvh - 6.3rem);
`;

export const completeWrapperStyle = css`
  ${flexGenerator('column', 'flex-start', 'flex-start')}
  gap: 4rem;
`;

export const completeSpanStyle = (theme: Theme) => css`
  color: ${theme.color.purple2};
  ${theme.font['subhead05-sb-14']}
`;

export const completeHStyle = (theme: Theme) => css`
  color: ${theme.color.black};
  ${theme.font['head01-b-22']}
`;

export const completeMainStyle = css`
  ${flexGenerator('column', 'flex-start', 'flex-start')}
  gap: 2rem;
`;

export const completeCautionStyle = (theme: Theme) => css`
  ${flexGenerator('column', 'flex-start', 'flex-start')}
  gap: 1rem;
  padding: 1.5rem;
  height: 19.5rem;
  background-color: ${theme.color.bg_white0};
  border-radius: 10px;
`;

export const completeCautionTitleStyle = (theme: Theme) => css`
  ${theme.font['subhead05-sb-14']}
  color: ${theme.color.midgray2};
`;

export const completeTextStyle = (theme: Theme) => css`
  padding-left: 1.5rem;
  margin-bottom: 1rem;

  li {
    ${theme.font['body02-r-14']}
    color: ${theme.color.midgray1};
    margin-bottom: 0.5rem;
    list-style-type: disc;
  }
`;

export const completeFooterStyle = css`
  width: 100%;
  margin-top: auto;
`;
