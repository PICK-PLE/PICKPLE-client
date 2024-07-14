import { css, Theme } from '@emotion/react';

export const classInfoContainer = (theme: Theme) => css`
  padding: 1.8rem 1.2rem;

  ${theme.font['body02-r-14']};
  color: ${theme.color.midgray2};
`;
