import { Theme, css } from '@emotion/react';

import { flexGenerator } from '@styles/generator';

export const buttonStyle = (theme: Theme) => css`
  ${flexGenerator()}
  gap: 1rem;
  width: 100%;
  min-height: 5rem;

  border: none;
  border-radius: 5px;
  outline: none;

  ${theme.font['head04-b-16']}

  cursor: pointer;
`;

export const kakaoStyle = (theme: Theme) => css`
  color: ${theme.color.kakaobrown};
  background-color: ${theme.color.kakaoyellow};
`;

export const iconWrapperStyle = css`
  width: 2rem;
  height: 2rem;
`;
