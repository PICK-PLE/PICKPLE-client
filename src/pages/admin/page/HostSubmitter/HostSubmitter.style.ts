import { css, Theme } from '@emotion/react';
import { flexGenerator } from '@styles/generator';

export const tableLayoutStyle = (theme: Theme) => css`
  ${flexGenerator('column', 'flex-start', 'flex-start')}
  gap: 1rem;
  flex-wrap: wrap;
  position: absolute;
  right: 0;
  top: 0;
  width: 100vw;
  height: 100vw;
  padding: 3rem 2rem;

  background-color: ${theme.color.white};
`;

export const tableContainerStyle = css`
  border-collapse: collapse;
  width: 100%;
`;

export const tableStyle = css`
  border-collapse: collapse;
  table-layout: fixed;
`;

export const titleStyle = (theme: Theme) => css`
  ${theme.font['body01-r-15']}
`;

export const thSmallStyle = (theme: Theme) => css`
  background-color: #f2f2f2;
  padding: 0.5rem;
  text-align: center;
  vertical-align: middle;
  border: 1px solid #ddd;
  ${theme.font['subhead02-sb-16']}

  width: 8rem;
`;

export const thLargeStyle = (theme: Theme) => css`
  background-color: #f2f2f2;
  padding: 0.5rem;
  text-align: center;
  vertical-align: middle;
  border: 1px solid #ddd;
  ${theme.font['subhead02-sb-16']}

  width: 27rem;
`;

export const tdStyle = (theme: Theme) => css`
  padding: 0.5rem;
  text-align: center;
  border: 1px solid #ddd;
  ${theme.font['subhead03-m-16']}
`;
