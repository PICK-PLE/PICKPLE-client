import { css, Theme } from '@emotion/react';
import { flexGenerator } from '@styles/generator';

export const adminLayoutStyle = (theme: Theme) =>css`
  position: absolute;
  right: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${theme.color.white};
`

export const tableLayoutStyle = css`
  ${flexGenerator('column', 'flex-start', 'flex-start')}
  gap: 1rem;
  flex-wrap: wrap;
  padding: 3rem 2rem;
`;

export const inputLayoutStyle = (theme: Theme) => css`
${flexGenerator('column', 'center', 'center')}
gap: 1rem;
height: 50%;
${theme.font['subhead05-sb-14']}
`

export const commonContainerStyle = css`
${flexGenerator('column', 'center', 'center')}
`

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

  min-width: 7rem;
`;

export const thLargeStyle = (theme: Theme) => css`
  background-color: #f2f2f2;
  padding: 0.5rem;
  text-align: center;
  vertical-align: middle;
  border: 1px solid #ddd;
  ${theme.font['subhead02-sb-16']}

  min-width: 25rem;
`;

export const tdStyle = (theme: Theme) => css`
  padding: 0.5rem;
  text-align: center;
  border: 1px solid #ddd;
  ${theme.font['subhead03-m-16']}
`;

export const inputStyle = (theme: Theme) => css`
width: 30rem;
height: 4rem;
`