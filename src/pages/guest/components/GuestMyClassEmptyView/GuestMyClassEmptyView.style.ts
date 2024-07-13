import { Theme, css } from '@emotion/react';
import { flexGenerator } from '@styles/generator';

export const completedTabContainer = (theme: Theme) => css`
  ${flexGenerator('column')}
  height: 100dvh;
  padding: 9.6rem 9.3rem 20.9rem 9.3rem;

  background-color: ${theme.color.background};
`;

export const textWrapper = css`
  ${flexGenerator('column', 'center', 'center')}
  width: 100%;
  margin-top: 2.2rem;
`;

export const textStyle = (theme: Theme) => css`
  color: ${theme.color.lightgray2};
  ${theme.font['subhead05-sb-14']}
`;

export const detailWrapper = css`
  ${flexGenerator('column', 'center', 'center')}
  gap: 2rem;
`;

export const svgStyle = css`
  width: 15rem;
  height: 15rem;
`;