import { css } from '@emotion/react';
import { flexGenerator } from '@styles/generator';

export const logoHeaderWrapper = css`
  ${flexGenerator('row', 'space-between', 'center')};
  width: 100%;
  height: 6rem;
  padding: 1.6rem 2rem;
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
