import { Theme, css } from '@emotion/react';

import { flexGenerator } from '@styles/generator';

export const hostMyPageEmptyViewContainer = css`
  ${flexGenerator('column')};
  margin-top: 10.1rem;
  width: 100%;
  gap: 2rem;
`;

export const imageStyle = css`
  width: 15rem;
  height: 15rem;
`;

export const hostMyPageEmptyViewWrapper = css`
  ${flexGenerator('column')};
`;

export const textStyle = (theme: Theme) => css`
  color: ${theme.color.lightgray2};
  ${theme.font['subhead05-sb-14']}
`;

export const textWrapper = css`
  ${flexGenerator()};
`;

export const buttonWrapper = css`
  ${flexGenerator('row', 'center', ' center')};
  width: 17.7rem;
  gap: 1rem;
`;

export const hostMyPageEmptyViewBox = css`
  ${flexGenerator('column', 'center', 'center')};
  gap: 2rem;
`;
