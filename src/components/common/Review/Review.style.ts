import { Theme, css } from '@emotion/react';

import { flexGenerator } from '@styles/generator';

export const reviewLayoutStyle = (theme: Theme) => css`
  ${flexGenerator('column', 'center', 'flex-start')}
  gap: 2rem;
  width: 100%;
  padding: 2rem;

  border-radius: 10px;
  border: 1px solid ${theme.color.lightgray0};
  background-color: ${theme.color.white};
`;

export const reviewContentContainer = css`
  ${flexGenerator('column', 'center', 'flex-start')}
  gap: 1rem;
  width: 100%;
`;

export const reviewContent = (theme: Theme) => css`
  color: ${theme.color.midgray2};
  ${theme.font['body02-r-14']}
  word-break: break-word;
`;

export const tagsContainer = css`
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem 0.4rem;
  width: 100%;
`;

export const imgAndTitleContainer = css`
  ${flexGenerator('column')}
  gap: 1rem;
  width: 100%;
`;

export const reviewImgSection = (theme: Theme) => css`
  width: 100%;
  height: 21rem;
  background-color: ${theme.color.lightgray1};
  border-radius: 10px;
  position: relative;
  overflow: hidden;
`;

export const imgStyle = css`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: inherit;
`;

export const moimTitleWrapper = (theme: Theme) => css`
  ${flexGenerator('row', 'space-between', 'center')}
  gap: 4.8rem;
  width: 100%;
  padding: 1rem 0.6rem 1rem 1rem;

  border-radius: 5px;
  background-color: ${theme.color.bg_white1};

  color: ${theme.color.darkgray};
  ${theme.font['subhead05-sb-14']}

  cursor: pointer;
`;

export const iconStyle = css`
  width: 2.4rem;
  height: 2.4rem;
`;

export const timeTextStyle = (theme: Theme) => css`
  color: ${theme.color.midgray1};
  ${theme.font['body03-r-12']}
`;
