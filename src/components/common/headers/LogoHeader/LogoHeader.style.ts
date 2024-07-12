import { css } from '@emotion/react';
import { flexGenerator } from '@styles/generator';

export const logoHeaderWrapper = css`
  position: fixed;
  top: 0;
  z-index: 5;
  background-color: white;

  ${flexGenerator('row', 'space-between', 'center')};
  width: 100%;
  max-width: 43rem;

  height: 6rem;
  padding: 1.6rem 2rem;
`;

export const logoWrapper = css`
  width: 10.5rem;
  height: 2.8rem;

  cursor: pointer;
`;

export const iconWrapper = css`
  width: 2.4rem;
  height: 2.4rem;

  cursor: pointer;
`;
