import { Theme, css } from '@emotion/react';

import { flexGenerator } from '@styles/generator';

export const ulStyle = css`
  display: grid;
  grid-template-columns: repeat(5, auto);
  gap: 2rem 1.2rem;
  width: 100%;
`;

export const liStyle = css`
  ${flexGenerator('column')}
  gap: 0.5rem;
  list-style: none;
`;
export const imgStyle = css`
  width: 5.7rem;
  height: 5.7rem;
`;

export const labelStyle = (theme: Theme) => css`
  color: ${theme.color.lightgray2};
  ${theme.font['body04-m-12']}
`;
