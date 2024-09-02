import { css, Theme } from '@emotion/react';

import { flexGenerator } from '@styles/generator';

export const loginWrapper = css`
  ${flexGenerator('column')};
  width: 100%;
  height: 100dvh;
  padding: 6.5rem 2rem 5.5rem;
`;

export const titleWrapper = css`
  width: 100%;
  ${flexGenerator('column', 'flex-start', 'flex-start')};
  gap: 1.7rem;

  padding-left: 2rem;
`;

export const titleStyle = (theme: Theme) => css`
  ${theme.font['head01-b-22']}
`;

export const logoWrapper = css`
  width: 17.2rem;
  z-index: 10;
`;

export const loginImageWrapper = css`
  width: 100%;
  ${flexGenerator('row', 'flex-end')};
  margin: 15% 0;
`;

export const loginImageStyle = css`
  width: 22.4rem;
  height: 28rem;
`;

export const logoStyle = css`
  width: 14rem;
`;
