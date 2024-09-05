import { Theme, css } from '@emotion/react';

export const tagWrapper = css`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem 0.6rem;
  width: 100%;
`;

export const buttonStyle = (theme: Theme) => css`
  display: inline-flex;
  padding: 0.5rem;

  border-radius: 5px;
  border: 1px solid ${theme.color.purple1};
  ${theme.font['body03-r-12']}

  cursor: pointer;
`;

export const selectedStyle = (theme: Theme) => css`
  color: ${theme.color.white};
  background-color: ${theme.color.purple1};
`;
export const unSelectedStyle = (theme: Theme) => css`
  color: ${theme.color.purple1};
  background-color: ${theme.color.white};
`;
