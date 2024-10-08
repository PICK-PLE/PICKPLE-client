import { css } from '@emotion/react';

export const imageWrapper = (width: string, height: string) => css`
  position: relative;
  min-width: ${width};
  min-height: ${height};
  width: ${width};
  height: ${height};
`;

export const imageVariant = {
  square: css`
    border-radius: 5px;
  `,
  round: css`
    border-radius: 50%;
  `,
};

export const imageStyle = css`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const labelStyle = css`
  position: absolute;
  top: 1rem;
  left: 1rem;
`;
