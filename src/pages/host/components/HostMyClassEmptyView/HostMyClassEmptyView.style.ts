import { Theme, css } from '@emotion/react';

import { flexGenerator } from '@styles/generator';

export const completedTabContainer = (theme: Theme) => css`
  ${flexGenerator('column', 'flex-start', 'center')}
  height: calc(100dvh - 10.4rem);
  padding: 20% 9.3rem 0;
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

export const detailWrapper = css`
  ${flexGenerator('column', 'center', 'center')}
  gap: 2rem;
`;

export const IcHostMyClassStyle = css`
  width: 15rem;
  height: 15rem;
`;

export const buttonWrapper = css`
  margin-top: 2rem;
  width: 100%;
`;
