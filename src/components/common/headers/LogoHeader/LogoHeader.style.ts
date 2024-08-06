import { Theme, css } from '@emotion/react';

import { flexGenerator } from '@styles/generator';

export const logoHeaderWrapper = (theme: Theme) => css`
  position: fixed;
  top: 0;
  z-index: 2;

  ${flexGenerator('row', 'space-between', 'center')};
  width: 100%;
  max-width: 43rem;

  height: 6rem;
  padding: 1.6rem 2rem;

  background-color: ${theme.color.white};
`;

export const logoWrapper = css`
  width: 10.5rem;
  height: 2.8rem;

  cursor: pointer;
`;

export const iconStyle = css`
  width: 2.4rem;
  height: 2.4rem;

  cursor: pointer;
`;
