import { css } from '@emotion/react';
import { flexGenerator } from '@styles/generator';

export const loginWrapper = css`
  ${flexGenerator('column', 'space-between')};
  gap: 21.4rem;
  width: 100%;
  height: 100dvh;

  padding: 23.8rem 2rem 13.6rem;
`;

export const logoStyle = css`
  width: 14rem;
`;
