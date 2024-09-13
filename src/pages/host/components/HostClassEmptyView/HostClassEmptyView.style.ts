import { css, Theme } from '@emotion/react';

import { flexGenerator } from '@styles/generator';

export const emptyClassContainer = css`
  ${flexGenerator('column')};
  gap: 1rem;
  height: 24rem;
`;

export const emptyClassImageStyle = css`
  width: 15rem;
  height: 15rem;
`;

export const emptyClassTextWrapper = css`
  ${flexGenerator('column')}
`;

export const emptyClassTextStyle = (theme: Theme) => css`
  ${theme.font['subhead02-sb-16']};
  color: ${theme.color.lightgray2};
`;
