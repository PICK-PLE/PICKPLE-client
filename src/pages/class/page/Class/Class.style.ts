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

export const classInfo = css`
  padding: 2.4rem 2rem 4rem;
`;

export const classNameStyle = (theme: Theme) => css`
  margin-top: 1.4rem;
  padding-right: 4.5rem;
  ${theme.font['head01-b-22']};
`;

export const classInfoList = css`
  ${flexGenerator('column', 'flex-start', 'flex-start')};
  gap: 1rem;
  margin: 2rem 0 4rem;
`;

export const tabWrapper = (theme: Theme) => css`
  position: sticky;
  top: 6rem;

  ${flexGenerator('row', 'flex-start')};

  background-color: ${theme.color.white};

  padding-left: 2.8rem;
  gap: 2.3rem;
`;

export const tabButtonStyle = (theme: Theme) => css`
  ${theme.font['subhead01-sb-18']};

  background-color: ${theme.color.white};
  color: ${theme.color.midgray1};

  padding-bottom: 1.6rem;

  border: none;
`;

export const selectedTabStyle = (theme: Theme) => css`
  color: ${theme.color.blackgray};

  border-bottom: 2px solid ${theme.color.blackgray};
`;

export const tabSectionStyle = (theme: Theme) => css`
  background-color: ${theme.color.background};
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

export const buttonContainer = (widowWidth: number) => (theme: Theme) =>
  css`
    width: ${widowWidth <= 430 ? `${widowWidth}px` : '430px'};
    position: fixed;
    bottom: 0;

    background-color: ${theme.color.white};

    ${flexGenerator()};
    gap: 0.5rem;

    padding: 1rem 2rem 3rem;

    z-index: 3;
  `;
