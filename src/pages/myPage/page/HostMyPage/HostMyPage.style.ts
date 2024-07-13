import { Theme, css } from '@emotion/react';
import { flexGenerator } from '@styles/generator';

export const userDistinguishWrapper = css`
  ${flexGenerator('row', 'flex-start', 'flex-start')};
  padding-left: 2rem;
  gap: 2rem;
`;

export const userSelectedTextStyle = (theme: Theme) => css`
  color: ${theme.color.black};
  ${theme.font['head03-b-18']}

  cursor: pointer;
`;

export const userUnselectedTextStyle = (theme: Theme) => css`
  color: ${theme.color.lightgray2};
  ${theme.font['head03-b-18']}

  cursor: pointer;
`;

export const line = (theme: Theme) => css`
  ${flexGenerator('row', 'center', 'stretch')};
  width: 100%;
  height: 0.8rem;

  background-color: ${theme.color.background};
`;

export const navigateBoxWrapper = css`
  ${flexGenerator('column', 'flex-start', 'flex-start')}
  width: 100%;
  padding-left: 2rem;
  padding-right: 2rem;
  gap: 2.8rem;
`;
