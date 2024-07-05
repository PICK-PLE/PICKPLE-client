import { Theme } from '@emotion/react';
import { css } from '@emotion/react';
import theme from '@styles/theme';

export const progressBarContainer = css`
  width: 100%;
  height: 0.6rem;
  background-color: ${theme.color.lightgray1};
`;

export const progressBarStyle = (progress: number) => (theme: Theme) =>
  css`
    width: ${progress}%;
    height: 100%;
    background-color: ${theme.color.purple1};
  `;
