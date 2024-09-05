import { Theme, css } from '@emotion/react';

import { flexGenerator } from '@styles/generator';

export const pageLayout = css`
  ${flexGenerator('column')};
  min-height: 100dvh;
  padding-top: 6rem;
`;

export const homeLayout = () => css`
  width: 100%;
`;

export const homeBannerStyle = css`
  min-width: 37.5rem;
  width: 100%;
  aspect-ratio: 375 / 280;

  cursor: pointer;
`;

export const categoryContainer = css`
  ${flexGenerator('column')}
  width: 100%;
  margin-top: 4rem;
  gap: 2rem;
`;

export const titleStyle = (theme: Theme) => css`
  color: ${theme.color.black};
  ${theme.font['head03-b-18']}
`;

export const categoryStyle = css`
  display: grid;
  grid-template-columns: repeat(5, auto);
  padding: 0 2rem;
  width: 100%;
  gap: 1.2rem;
`;

export const iconStyle = css`
  ${flexGenerator('column')};

  cursor: pointer;
`;

export const imageStyle = css`
  width: 5.7rem;
  height: 5.7rem;
`;

export const iconNameStyle = (theme: Theme) => css`
  color: ${theme.color.midgray2};
  ${theme.font['body04-m-12']}
`;

export const bannerWrapper = css`
  padding: 4rem 2rem;

  cursor: pointer;
`;
