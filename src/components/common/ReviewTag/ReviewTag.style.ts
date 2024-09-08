import { Theme, css } from '@emotion/react';

export const reviewTagContainer = (theme: Theme) => css`
  padding: 0.5rem;
  border-radius: 5px;
  background-color: ${theme.color.background};
  color: ${theme.color.midgray2};
  ${theme.font['body03-r-12']}
  white-space: nowrap;
`;
