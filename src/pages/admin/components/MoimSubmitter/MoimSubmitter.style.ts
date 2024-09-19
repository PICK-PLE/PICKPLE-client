import { css, Theme } from '@emotion/react';

import { flexGenerator } from '@styles/generator';

export const tableLayoutStyle = css`
  ${flexGenerator('column', 'flex-start', 'flex-start')}
  gap: 1rem;
  flex-wrap: wrap;
  padding: 3rem 2rem;
`;

export const tableContainerStyle = css`
  border-collapse: collapse;
  width: 100%;
`;

export const tableStyle = css`
  border-collapse: collapse;
  table-layout: fixed;
  width: 100%;
`;

export const titleStyle = (theme: Theme) => css`
  ${theme.font['subhead01-sb-18']}
`;

export const trStyle = (theme: Theme) => css`
  & > th {
    background-color: #f2f2f2;
    padding: 0.5rem;
    text-align: center;
    vertical-align: middle;
    word-break: keep-all;
    border: 1px solid ${theme.color.lightgray1};
    ${theme.font['subhead05-sb-14']}

    max-width: 10rem;
  }

  & > td {
    padding: 0.5rem;
    text-align: center;
    border: 1px solid ${theme.color.lightgray0};
    word-break: break-all;
    ${theme.font['subhead06-m-14']}
  }
`;
