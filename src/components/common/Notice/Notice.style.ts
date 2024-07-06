import { css, Theme } from '@emotion/react';

export const noticeStyle = css`
  display: flex;
  gap: 1.4rem;
  align-items: center;
  margin-left: 2rem;
  margin-right: 4.4rem;
`;

export const textStyle = (theme: Theme) => css`
  color: ${theme.color.midgray2};
  ${theme.font['body02-r-14']}
`;
