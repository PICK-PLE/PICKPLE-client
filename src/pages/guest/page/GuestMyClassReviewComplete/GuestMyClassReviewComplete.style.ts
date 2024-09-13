import { Theme, css } from '@emotion/react';

import { flexGenerator } from '@styles/generator';

export const reviewCompleteLayout = css`
  padding-top: 6rem;
`;

export const reviewCompleteContainer = css`
  ${flexGenerator('column')}
  width: 100%;
  min-width: 33.5rem;
  padding: 3.2rem 2rem 3rem 2rem;
  min-height: calc(100dvh - 6rem);
`;

export const textSectionStyle = css`
  ${flexGenerator('column', 'center', 'start')}
  width: 100%;

  span:nth-of-type(2) {
    margin-top: 0.3rem;
  }

  span:nth-of-type(3) {
    margin-top: 1rem;
  }
`;

export const purpleTextStyle = (theme: Theme) => css`
  color: ${theme.color.purple1};
  ${theme.font['subhead05-sb-14']}
`;

export const bigSpan = (theme: Theme) => css`
  color: ${theme.color.black};
  ${theme.font['head01-b-22']}
`;

export const smallSpan = (theme: Theme) => css`
  color: ${theme.color.midgray2};
  ${theme.font['body02-r-14']}
`;

export const imgSectionStyle = css`
  ${flexGenerator()}
  width: 100%;
  margin-top: 5.3rem;
`;

export const imgStyle = css`
  width: 29rem;
  height: 29rem;
`;

export const buttonSectionStyle = css`
  width: 100%;
  margin-top: auto;
`;
