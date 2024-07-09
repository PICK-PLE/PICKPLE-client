import { Theme, css } from '@emotion/react';
import { flexGenerator } from '@styles/generator';

export const buttonStyle = css`
  ${flexGenerator()}
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
`;

export const buttonSize = {
  xLarge: (theme: Theme) => css`
    min-width: 33.5rem;
    width: 100%;
    height: 6rem;
    padding: 1.4rem 1rem;

    border-radius: 10px;

    ${theme.font['head04-b-16']}
    color: ${theme.color.white};
    background-color: ${theme.color.purple1};
  `,
  large: (theme: Theme) => css`
    min-width: 33.5rem;
    width: 100%;
    height: 5rem;
    padding: 1.4rem 1rem;

    border-radius: 10px;

    ${theme.font['head04-b-16']}
    color: ${theme.color.white};
    background-color: ${theme.color.purple1};
  `,
  medium: (theme: Theme) => css`
    min-width: 29.9rem;
    width: 100%;
    height: 4.6rem;
    padding: 0.8rem;

    border-radius: 5px;

    ${theme.font['subhead05-sb-14']}
    color: ${theme.color.white};
    background-color: ${theme.color.purple1};
  `,
  small: (theme: Theme) => css`
    min-width: 27rem;
    width: 100%;
    height: 6rem;
    padding: 1rem;

    border-radius: 10px;

    ${theme.font['head04-b-16']}
    color: ${theme.color.white};
    background-color: ${theme.color.purple1};
  `,
  xSmall: (theme: Theme) => css`
    min-width: 25.4rem;
    width: 100%;
    height: 4.4rem;
    padding: 1.2rem 1rem;

    border: 1px solid ${theme.color.lightgray2};
    border-radius: 10px;

    ${theme.font['body02-r-14']}
    color: ${theme.color.midgray2};
    background-color: ${theme.color.white};
  `,
  xxSmall: (theme: Theme) => css`
    min-width: 17.7rem;
    width: 100%;
    height: 4.8rem;
    padding: 1.4rem 1rem;

    border: 1px solid ${theme.color.purple4};
    border-radius: 30px;

    ${theme.font['subhead03-m-16']}
    color: ${theme.color.purple3};
    background-color: ${theme.color.white};
  `,
};

export const disabledStyle = (theme: Theme) => css`
  color: ${theme.color.midgray2};
  background-color: ${theme.color.lightgray2};
`;