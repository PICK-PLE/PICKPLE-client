import { Theme, css } from '@emotion/react';

import { flexGenerator } from '@styles/generator';

export const buttonStyle = (theme: Theme) => css`
  ${flexGenerator()};
  min-width: 6rem;
  width: 6rem;
  height: 6rem;

  padding: 1rem;

  border: none;
  border-radius: 10px;
  background-color: ${theme.color.purple6};

  cursor: pointer;
`;

export const iconStyle = css`
  width: 2.4rem;
  height: 2.4rem;
`;
