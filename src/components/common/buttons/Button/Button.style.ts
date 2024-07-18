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
  large: (theme: Theme) => css`
    width: 100%;
    height: 6rem;
    padding: 1rem;

    border-radius: 10px;

    ${theme.font['head04-b-16']}
    color: ${theme.color.white};
    background-color: ${theme.color.purple1};
  `,
  medium: (theme: Theme) => css`
    width: 100%;
    height: 5.5rem;
    padding: 1rem;

    border-radius: 10px;

    ${theme.font['head04-b-16']}
    color: ${theme.color.white};
    background-color: ${theme.color.purple1};
  `,
  small: (theme: Theme) => css`
    width: 100%;
    height: 5rem;
    padding: 1.4rem 1rem;

    border-radius: 10px;

    ${theme.font['head04-b-16']}
    color: ${theme.color.white};
    background-color: ${theme.color.purple1};
  `,
  xSmall: (theme: Theme) => css`
    width: 100%;
    height: 4.6rem;
    padding: 0.8rem;

    border-radius: 5px;

    ${theme.font['subhead05-sb-14']}
    color: ${theme.color.white};
    background-color: ${theme.color.purple1};
  `,
  stroke: (theme: Theme) => css`
    width: 100%;
    height: 5.4rem;
    padding: 1.7rem 1rem;

    border: 1px solid ${theme.color.lightgray2};
    border-radius: 10px;

    ${theme.font['body02-r-14']}
    color: ${theme.color.midgray2};
    background-color: transparent;
  `,
  round: (theme: Theme) => css`
    width: 100%;
    height: 4.8rem;
    padding: 1.4rem 1rem;

    border: 1px solid ${theme.color.purple4};
    border-radius: 30px;

    ${theme.font['subhead03-m-16']}
    color: ${theme.color.purple3};
    background-color: transparent;
  `,
};

export const disabledStyle = (theme: Theme) => css`
  color: ${theme.color.midgray2};
  background-color: ${theme.color.lightgray1};
`;
