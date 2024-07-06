import { Theme } from '@emotion/react';
import { css } from '@emotion/react';
import { flexGenerator } from '@styles/generator';

export const labelStyle = css`
  ${flexGenerator()}
`;

export const labelVariant = (theme: Theme) => ({
  status: css`
    border-radius: 5px;
    background-color: ${theme.color.purple2};
    width: 5.7rem;
    height: 2rem;
    color: ${theme.color.white};
    ${theme.font['body03-r-12']}
  `,
  dDay: css`
    display: inline-flex;
    border-radius: 5px;
    background-color: ${theme.color.purple2};
    color: ${theme.color.white};
    ${theme.font['subhead05-sb-14']}
    padding: 0.4rem 1rem;
    white-space: nowrap;
  `,

  category: css`
    ${flexGenerator()}
    width: 10.7rem;
    height: 3.4rem;
    padding: 0.5rem 1rem;
    background: ${theme.color.purple6};
    border-radius: 5px;
    color: ${theme.color.purple1};
    ${theme.font['body03-r-12']}
    gap: 0.4rem;
  `,
});

export const labelSize = {
  small: css`
    width: 7.2rem;
    height: 2.7rem;
  `,
  large: css`
    width: 10.7rem;
    height: 3.4rem;
  `,
};

export const iconWrapperStyle = css`
  width: 1.6rem;
  height: 1.6rem;
`;
