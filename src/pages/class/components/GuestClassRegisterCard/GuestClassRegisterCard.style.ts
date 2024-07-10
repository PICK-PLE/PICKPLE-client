import { css } from '@emotion/react';
import { flexGenerator } from '@styles/generator';

export const cardContainerStyle = css`
  ${flexGenerator('column')}
  gap: 1.9rem;
  padding: 1.5rem;
`;
