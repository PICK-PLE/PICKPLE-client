import { css, Theme } from '@emotion/react';

export const swiperStyle = (theme: Theme) => css`
  width: 100%;
  height: 100%;
  .swiper-pagination-bullet-active {
    background: ${theme.color.purple1};
  }
`;

export const imageStyle = css`
  width: 100%;
  aspect-ratio: 375 / 211;

  object-fit: cover;
`;
