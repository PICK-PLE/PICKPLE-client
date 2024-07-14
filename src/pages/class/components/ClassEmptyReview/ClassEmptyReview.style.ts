import { css, Theme } from '@emotion/react';
import { flexGenerator } from '@styles/generator';

export const emptyReviewContainer = css`
  ${flexGenerator('column')};
  height: 50rem;
`;

export const imageStyle = css`
  width: 15rem;
  height: 15rem;
`;

export const textStyle = (theme: Theme) => css`
  ${theme.font['subhead01-sb-18']};
  color: ${theme.color.lightgray2};
`;
