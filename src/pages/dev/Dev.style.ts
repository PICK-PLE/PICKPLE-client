import { css } from '@emotion/react';

export const devContainer = css`
  padding: 0 2rem;
`;

export const accodionAlignStyle = () => css`
  ${flexGenerator('column', 'center', 'center')}
  gap: 2rem;
  margin: 2rem;
`;
