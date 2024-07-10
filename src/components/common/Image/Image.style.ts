import { Theme, css } from '@emotion/react';

export const imageWrapper = (width: string, height: string) => (theme: Theme) =>
  css`
    position: relative;
    border-radius: 5px;
    background-color: ${theme.color.lightgray1};
    aspect-ratio: ${width} / ${height};
    min-width: ${width};
    min-height: ${height};
  `;

export const imageVariant = {
  square: css`
    border-radius: 5px;
  `,
  round: css`
    border-radius: 100%;
  `,
};

export const labelStyle = css`
  position: absolute;
  top: 1rem;
  left: 1rem;
`;
