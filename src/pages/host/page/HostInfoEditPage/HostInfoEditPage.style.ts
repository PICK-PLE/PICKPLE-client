import { css } from '@emotion/react';

import { flexGenerator } from '@styles/generator';

export const hostInfoLayout = css`
  ${flexGenerator('column', 'flex-start', 'flex-start')}
  gap: 7.2rem;
  padding-top: 6rem;
  width: 100%;
`;

export const hostInfoContainer = css`
  width: 100%;
`;

export const hostImageWrapper = css`
  position: relative;
`;

export const hostBackgroundImage = css`
  width: 100%;
  height: 11.6rem;
  border-radius: 0;
`;

export const hostProfileImage = css`
  position: absolute;
  top: 7.4rem;
  left: 2rem;
`;

export const hostInputContainer = css`
  ${flexGenerator('column', 'flex-start', 'flex-start')};
  gap: 5.4rem;
  width: 100%;
  padding: 0 2rem 3rem 2rem;
`;

export const hostInputWrapper = css`
  ${flexGenerator('column', 'flex-start', 'flex-start')};
  gap: 2.2rem;
`;
