import { css, Theme } from '@emotion/react';
import { flexGenerator } from '@styles/generator';

export const emptyViewLayout = css`
  ${flexGenerator('column')};
  height: calc(100dvh - 34.2rem);
`;

export const emptyViewContainer = css`
  ${flexGenerator('column', 'center', 'center')};
  gap: 2.1rem;
`;

export const emptyViewWrapper = css`
  ${flexGenerator('column', 'center', 'center')}
`;

export const emptyViewImageStyle = css`
  width: 15rem;
`;

export const emptyViewButtonStyle = css`
  width: 17.7rem;
`;

export const emptyText = (theme: Theme) => css`
  ${flexGenerator('column')};
  ${theme.font['subhead05-sb-14']};
  color: ${theme.color.lightgray1};
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

export const selectedTextStyle = (theme: Theme) => css`
  color: ${theme.color.purple1};
  ${theme.font['subhead02-sb-16']}
`;

export const maxGuestStyle = (theme: Theme) => css`
  color: ${theme.color.purple1};
  ${theme.font['subhead03-m-16']};
`;
