import { Theme, css } from '@emotion/react';
import { flexGenerator } from '@styles/generator';

export const labelStyle = css`
  ${flexGenerator()}
  border-radius: 5px;
`;

export const labelVariant = (theme: Theme) => ({
  status: css`
    display: inline-flex;
    width: 5.7rem;
    height: 2rem;
    background-color: ${theme.color.purple2};
    color: ${theme.color.white};
    ${theme.font['body03-r-12']}
  `,
  dDay: css`
    display: inline-flex;
    padding: 0.4rem 1rem;
    background-color: ${theme.color.purple2};
    color: ${theme.color.white};
    ${theme.font['subhead05-sb-14']}
    white-space: nowrap;
  `,
  category: css`
    width: 7.2rem;
    height: 2.7rem;
    padding: 0.5rem 1rem;
    gap: 0.4rem;
    background-color: ${theme.color.purple6};
    color: ${theme.color.purple1};
    ${theme.font['body03-r-12']}
  `,
  textCount: css`
    display: inline-flex;
    height: 3.4rem;
    padding: 0.6rem 1rem;
    gap: 0.4rem;
    background-color: ${theme.color.white};
    color: ${theme.color.darkgray};
    ${theme.font['subhead02-sb-16']};
  `,
});

export const iconWrapperStyle = css`
  width: 1.6rem;
  height: 1.6rem;
`;
