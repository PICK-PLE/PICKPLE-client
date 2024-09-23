import { Theme, css } from '@emotion/react';

import { flexGenerator } from '@styles/generator';

export const completedTabContainer = (theme: Theme) => css`
  ${flexGenerator('column')}
  height: 30rem;
  width: 100%;
  background-color: ${theme.color.bg_white0};
`;

export const textWrapper = css`
  ${flexGenerator('column')}
  width: 100%;
  margin-top: 0.5rem;
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
  width: 18rem;
`;
