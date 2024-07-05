import { Theme, css } from '@emotion/react';
import { flexGenerator } from '@styles/generator';

export const selectButtonContainer = css`
  ${flexGenerator()};
  width: 100%;
  min-width: 33.5rem;
`;

export const buttonStyle = (theme: Theme) => css`
  ${flexGenerator()};
  width: 50%;
  height: 5.1rem;
  background-color: ${theme.color.lightgray1};
  color: ${theme.color.midgray1};
  ${theme.font['head04-b-16']}
`;

export const leftButton = css`
  border-radius: 10px 0 0 10px;
`;

export const rightButton = css`
  border-radius: 0 10px 10px 0;
`;

export const selectedButton = (theme: Theme) => css`
  background-color: ${theme.color.purple1};
  color: ${theme.color.white};
`;
