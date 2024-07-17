import { css } from '@emotion/react';
import { flexGenerator } from '@styles/generator';

export const noticeCardContainer = css`
  ${flexGenerator('column', 'flex-start')};
  gap: 2rem;
  width: 100%;
`;
