import { Theme, css } from '@emotion/react';
import { flexGenerator } from '@styles/generator';

export const hostMyPageEmptyViewContainer = css`
  ${flexGenerator('column')};
  padding: 10.6rem 6.2rem 20.9rem 6.2rem;
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
