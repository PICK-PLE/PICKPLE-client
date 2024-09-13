import { Theme, css } from '@emotion/react';

import { flexGenerator } from '@styles/generator';

export const categoriesContainer = (theme: Theme) => css`
  position: fixed;
  top: 6rem;
  z-index: 2;
  width: 100%;
  max-width: 43rem;
  ${flexGenerator('row', 'flex-start', 'center')};
  gap: 1.2rem;
  overflow-x: auto;

  padding: 1.2rem 2rem;

  background-color: ${theme.color.white};
`;

export const categoryWrapper = css`
  ${flexGenerator('column', 'flex-start')};
  gap: 0.5rem;

  cursor: pointer;
`;

export const imageStyle = css`
  width: 5.7rem;
  height: 5.7rem;
`;

export const unSeletedIconNameStyle = (theme: Theme) => css`
  color: ${theme.color.lightgray2};
  ${theme.font['body04-m-12']}
`;

export const seletedIconNameStyle = (theme: Theme) => css`
  color: ${theme.color.midgray2};
  ${theme.font['body04-m-12']}
`;

export const mainLayout = css`
  margin-top: 18.55rem;
  padding: 0 2rem;
`;

export const titleStyle = (theme: Theme) => css`
  ${theme.font['head03-b-18']};
  color: ${theme.color.black};
`;

export const moimListContainer = css`
  ${flexGenerator('column')};
  gap: 1.2rem;
  margin: 2rem 0;
`;

export const moimCardStyle = css`
  width: 100%;

  cursor: pointer;
`;

export const spinnerStyle = css`
  ${flexGenerator()};
  height: 30rem;
`;
