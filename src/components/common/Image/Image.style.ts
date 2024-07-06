import { Theme, css } from '@emotion/react';

export const imageWrapper = (width: string, height: string) => (theme: Theme) =>
  css`
    position: relative;
    border-radius: 5px;
    background-color: ${theme.color.lightgray1};
    aspect-ratio: ${width} / ${height};
    width: ${width};
    height: ${height};
  `;

export const imageVariant = {
  square: css`
    border-radius: 5px;
  `,
  round: css`
    border-radius: 100%;
  `,
};
