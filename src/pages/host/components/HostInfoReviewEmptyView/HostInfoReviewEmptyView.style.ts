import { css, Theme } from '@emotion/react';

import { flexGenerator } from '@styles/generator';

export const emptyReviewContainer = css`
  ${flexGenerator('column')};
  height: 30rem;
`;

export const imageStyle = css`
  width: 15rem;
  height: 15rem;
`;

export const textStyle = (theme: Theme) => css`
  ${theme.font['subhead04-sb-15']};
  color: ${theme.color.lightgray2};
`;
