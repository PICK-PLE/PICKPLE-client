import { Theme } from '@emotion/react';
import { css } from '@emotion/react';
import { flexGenerator } from '@styles/generator';

export const guestClassAppliedCardContainer = (theme: Theme) => css`
  ${flexGenerator('column', 'center', 'flex-start')}
  width: 100%;
  padding: 1.8rem;
  gap: 1.2rem;

  border-radius: 10px;
  background: ${theme.color.white};
`;
