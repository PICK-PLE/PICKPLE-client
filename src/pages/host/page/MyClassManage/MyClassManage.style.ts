import { css, Theme } from '@emotion/react';
import { flexGenerator } from '@styles/generator';

export const articleLayout = (theme: Theme) => css`
  padding: 3.2rem 2rem 3rem 2rem;
  ${flexGenerator('column', 'flex-start', 'flex-start')};
  gap: 2.4rem;
  width: 100%;
  border-top: 1px solid ${theme.color.lightgray1};
  min-height: calc(100dvh - 6.3rem);
`;

export const headerStyle = (theme: Theme) => css`
  ${theme.font['head02-b-20']}
  width: 26.2rem;
  // 단어 단위로 끊기
`;

export const mainStyle = css`
  ${flexGenerator('column', 'center', 'space-between')}
  width: 100%;
  gap: 3rem;
`;

export const labelStyle = css`
  //${flexGenerator('row', 'space-between', 'center')}
`;

export const accordionStyle = css`
  overflow-y: scroll;
`;

export const textStyle = css`
  ${flexGenerator('row')}
  gap: 0.4rem
`;

export const countTitleStyle = (theme: Theme) => css`
  ${theme.font['subhead02-sb-16']}
  color: ${theme.color.midgray1};
`;

export const countTextStyle = (theme: Theme) => css`
  ${theme.font['subhead02-sb-16']}
  color: ${theme.color.black}
`;

export const footerStyle = css`
  width: 100%;
  //margin: 0 2rem;
  //margin-top: auto;
  //position: fixed;
  //left: 0;
  //bottom: 0;
`;
