import { css, Theme } from '@emotion/react';

import { flexGenerator } from '@styles/generator';

export const classLayout = css`
  padding-top: 6rem;
  padding-bottom: 10rem;
`;

export const carouselWrapper = css`
  width: 100%;
  aspect-ratio: 375 / 211;
`;

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

export const classInfo = css`
  padding: 2.4rem 2rem 4rem;
`;

export const classNameStyle = (theme: Theme) => css`
  word-break: break-word;
  margin-top: 1.4rem;
  padding-right: 4.5rem;
  ${theme.font['head01-b-22']};
`;

export const classInfoList = css`
  ${flexGenerator('column', 'flex-start', 'flex-start')};
  gap: 1rem;
  margin: 2rem 0 3rem;
`;

export const tabWrapper = (theme: Theme) => css`
  position: sticky;
  top: 6rem;

  ${flexGenerator('row', 'flex-start')};

  background-color: ${theme.color.white};

  border-bottom: 2px solid ${theme.color.lightgray1};
  padding-left: 2.8rem;
  gap: 2.3rem;
`;

export const tabButtonStyle = (isSelected: boolean) => (theme: Theme) => css`
  display: inline-flex;
  flex-shrink: 0;
  ${theme.font['subhead01-sb-18']};

  background-color: ${theme.color.white};
  color: ${isSelected ? theme.color.blackgray : theme.color.midgray1};

  padding: 0;
  padding-bottom: 1.6rem;
  margin-bottom: -2px;
  border: none;
  border-bottom: 2px solid ${isSelected ? theme.color.blackgray : theme.color.lightgray1};

  cursor: pointer;
`;

export const tabSectionStyle = (theme: Theme) => css`
  background-color: ${theme.color.bg_white0};
  width: 100%;
  min-height: 60rem;
  padding: 2.8rem 2rem;
`;

export const infoSectionStyle = (theme: Theme) => css`
  background-color: ${theme.color.white};
`;

export const floatingButtonWrapper = (widowWidth: number) => css`
  position: fixed;
  bottom: 12rem;
  right: ${widowWidth <= 430 ? '2rem' : `${widowWidth / 20 - 19.5}rem`};
`;

export const buttonContainer = (widowWidth: number) => (theme: Theme) => css`
  width: ${widowWidth <= 430 ? `${widowWidth}px` : '430px'};
  position: fixed;
  bottom: 0;

  background-color: ${theme.color.white};

  ${flexGenerator()};
  gap: 0.5rem;

  padding: 1rem 2rem 3rem;

  z-index: 3;
`;
