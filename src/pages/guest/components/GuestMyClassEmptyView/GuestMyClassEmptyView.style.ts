import { Theme, css } from '@emotion/react';

import { flexGenerator } from '@styles/generator';

export const completedTabContainer = (theme: Theme) => css`
  ${flexGenerator('column')};
  height: calc(100dvh - 15rem);
  padding: 0 auto;
  width: 100%;

  background-color: ${theme.color.bg_white0};
`;

export const textWrapper = css`
  ${flexGenerator('column', 'center', 'center')}
  width: 100%;
  margin-top: 2.2rem;
`;

export const textStyle = (theme: Theme) => css`
  color: ${theme.color.lightgray2};
  ${theme.font['subhead05-sb-14']}
`;

export const svgStyle = css`
  width: 15rem;
  height: 15rem;
`;

export const buttonWrapper = css`
  width: 17.7rem;
  margin-top: 2rem;
`;
