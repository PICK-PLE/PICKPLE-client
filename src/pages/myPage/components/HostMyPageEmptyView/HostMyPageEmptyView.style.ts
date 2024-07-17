import { Theme, css } from '@emotion/react';
import { flexGenerator } from '@styles/generator';

export const hostMyPageEmptyViewContainer = css`
  height: calc(100dvh - 12.55rem);
  ${flexGenerator('column')};
  gap: 2rem;
  padding: 0 6.2rem;
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
