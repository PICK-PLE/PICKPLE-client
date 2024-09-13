import { css, Theme } from '@emotion/react';

import { flexGenerator } from '@styles/generator';

export const noticePostBackground = (theme: Theme) => css`
  background-color: ${theme.color.bg_white0};
  padding-top: 6.3rem;
  min-height: 100dvh;
`;

export const noticePostLayout = css`
  width: 100%;
  height: calc(100dvh - 6.3rem);
  ${flexGenerator('column', 'space-between')};

  padding: 3.7rem 2rem 3rem;
`;

export const noticePostMain = css`
  width: 100%;
  ${flexGenerator('column', 'flex-start', 'flex-start')};
  gap: 1rem;
`;

export const imageSelectWrapper = css`
  margin-top: 2rem;
`;
