import { css, Theme } from '@emotion/react';

import { flexGenerator } from '@styles/generator';

export const adminLayoutStyle = (theme: Theme) => css`
  ${flexGenerator('row', 'flex-start', 'flex-start')}
  position: absolute;
  right: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${theme.color.white};
`;

export const tapLayoutStyle = (theme: Theme) => css`
  ${flexGenerator('column', 'flex-start', 'flex-start')}
  min-width: 20rem;
  height: 100%;
  background-color: ${theme.color.lightgray0};
`;

export const tabTextStyle = (theme: Theme) => css`
  ${theme.font['subhead06-m-14']}
  padding: 2rem;
`;

export const tabButtonStyle = (theme: Theme) => css`
  width: 100%;
  height: 5rem;
  background-color: ${theme.color.lightgray0};
  border: 1px solid ${theme.color.black};

  :active {
    background-color: ${theme.color.lightgray1};
  }
`;

export const inputLayoutStyle = (theme: Theme) => css`
  ${flexGenerator('column', 'center', 'center')}
  gap: 1rem;
  height: 50%;
  ${theme.font['subhead05-sb-14']}
`;

export const titleStyle = (theme: Theme) => css`
  ${theme.font['body01-r-15']}
`;

export const inputStyle = css`
  width: 30rem;
  height: 4rem;
`;
