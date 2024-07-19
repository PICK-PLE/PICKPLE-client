import { css, Theme } from '@emotion/react';
import { flexGenerator } from '@styles/generator';

export const myClassManageLayout = (theme: Theme) => css`
  padding: 3.2rem 2rem 3rem 2rem;
  ${flexGenerator('column', 'flex-start', 'flex-start')};
  padding-top: 6rem;
  gap: 2.4rem;
  width: 100%;
  border-top: 1px solid ${theme.color.lightgray1};
  min-height: 100dvh;
  
`;

export const headerStyle = (theme: Theme) => css`
  ${theme.font['head02-b-20']}
  padding-right: 7.3rem;
  padding-top: 3.2rem;

  white-space: normal;
  word-break: keep-all;
`;

export const mainStyle = css`
  ${flexGenerator('column', 'center', 'space-between')}
  width: 100%;
  gap: 3rem;
`;

export const labelStyle = css`
  ${flexGenerator('row', 'space-between')}
`;

export const accordionStyle = css`
  overflow-y: scroll;
  max-height: calc(100dvh - 34.6rem);
`;

export const textStyle = css`
  ${flexGenerator('row')};
  gap: 0.4rem;
`;

export const countTitleStyle = (theme: Theme) => css`
  ${theme.font['subhead02-sb-16']};
  color: ${theme.color.midgray1};
`;

export const countTextStyle = (theme: Theme) => css`
  ${theme.font['subhead02-sb-16']};
  color: ${theme.color.black};
`;

export const footerStyle = css`
  width: 100%;
  margin-top: auto;
`;
