import { Theme, css } from '@emotion/react';

export const clickableTagContainer = (theme: Theme) => css`
  display: inline-flex;
  padding: 0.5rem;

  border-radius: 5px;
  border: 1px solid ${theme.color.purple1};

  color: ${theme.color.purple1};
  background-color: ${theme.color.white};
  ${theme.font['body03-r-12']}
`;
