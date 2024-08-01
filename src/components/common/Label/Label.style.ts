import { Theme, css } from '@emotion/react';

import { flexGenerator } from '@styles/generator';

export const labelStyle = css`
  width: fit-content;
  ${flexGenerator()};
  gap: 0.4rem;

  padding: 0.8rem 0.6rem;

  border-radius: 5px;
`;

export const labelVariant = {
  status: (theme: Theme) => css`
    height: 2rem;
    background-color: ${theme.color.purple2};
    color: ${theme.color.white};
    ${theme.font['body03-r-12']};
  `,
  dDay: (theme: Theme) => css`
    height: 2.8rem;
    background-color: ${theme.color.purple2};
    color: ${theme.color.white};
    ${theme.font['subhead05-sb-14']};
  `,
  category: (theme: Theme) => css`
    height: 2.7rem;
    background-color: ${theme.color.purple6};
    color: ${theme.color.purple1};
    ${theme.font['body03-r-12']};
  `,
  count: (theme: Theme) => css`
    height: 3.4rem;
    background-color: ${theme.color.purple6};
    color: ${theme.color.purple1};
    ${theme.font['body03-r-12']};
  `,
  countBlack: (theme: Theme) => css`
    height: 3.4rem;
    background-color: ${theme.color.white};
    color: ${theme.color.darkgray};
    ${theme.font['body03-r-12']};
  `,
  textCount: (theme: Theme) => css`
    height: 2.5rem;
    background-color: ${theme.color.purple6};
    color: ${theme.color.purple1};
    ${theme.font['body04-m-12']};
  `,
};

export const iconWrapperStyle = css`
  width: 1.6rem;
  height: 1.6rem;
`;
