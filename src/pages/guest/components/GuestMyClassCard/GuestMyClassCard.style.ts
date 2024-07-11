import { css } from '@emotion/react';
import { flexGenerator } from '@styles/generator';

export const guestClassAppliedCardContainer = css`
  ${flexGenerator('column', 'center', 'flex-start')}
  width: 100%;
  gap: 1.2rem;

  padding: 2rem;
  border-radius: 10px;
`;
