import { css, Theme } from '@emotion/react';

import { flexGenerator } from '@styles/generator';

export const modalContainerStyle = css`
  ${flexGenerator('column')}
  gap: 2.5rem;
  padding: 4rem 1.7rem 1.7rem 1.7rem;
`;
export const headerstyle = css`
  ${flexGenerator('column')}
  gap: 1rem;
`;
export const headerFirstH1Style = css`
  ${flexGenerator()}
  width: 100%;
`;

export const headerH1SpanStyle = (theme: Theme) => css`
  text-align: center;
  color: ${theme.color.black};
  ${theme.font['head03-b-18']}
`;

export const headerSecondH1Style = (theme: Theme) => css`
  ${flexGenerator('column')}
  color: ${theme.color.midgray2};
  ${theme.font['body02-r-14']};
`;
export const headerSpanStyle = (theme: Theme) => css`
  color: ${theme.color.midgray2} ${theme.font['subhead05-sb-14']};
`;

export const mainStyle = css`
  ${flexGenerator('column')}
  gap: 1.4rem;
`;

export const mainFirstSectionStyle = (theme: Theme) => css`
  ${flexGenerator('column')}
  gap: 1.5rem;
  width: 100%;
  padding: 1.5rem 1rem;

  border-radius: 10px;
  background-color: ${theme.color.bg_white0};
`;
export const accountInfoStyle = css`
  ${flexGenerator('column')}
`;

export const bankTextStyle = (theme: Theme) => css`
  color: ${theme.color.darkgray};
  ${theme.font['subhead04-sb-15']};
`;
export const accountHolderStyle = (theme: Theme) => css`
  color: ${theme.color.darkgray};
  ${theme.font['body01-r-15']};
`;
export const accountHolderNameStyle = (theme: Theme) => css`
  color: ${theme.color.darkgray} ${theme.font['subhead04-sb-15']};
`;
export const payButtonSectionStyle = css`
  ${flexGenerator()}
  gap: 1.1rem;
`;

export const completeButtonCustomStyle = (theme: Theme) => css`
  ${theme.font['subhead05-sb-14']}
`;
