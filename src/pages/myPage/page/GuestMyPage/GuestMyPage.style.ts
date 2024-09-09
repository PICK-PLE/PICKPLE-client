import { Theme, css } from '@emotion/react';

import { flexGenerator } from '@styles/generator';

export const myPageNav = css`
  padding: 7.4rem 2rem 3rem;
  ${flexGenerator('row', 'flex-start', 'flex-start')};
  gap: 2rem;
`;

export const tabStyle = (theme: Theme) => css`
  ${theme.font['head03-b-18']}
  color: ${theme.color.lightgray2};

  cursor: pointer;
`;

export const selectedTabStyle = (theme: Theme) => css`
  color: ${theme.color.black};
`;

export const profileWrapper = css`
  ${flexGenerator('row', 'flex-start', 'center')}
  padding: 0 2rem 2.8rem;
  gap: 0.8rem;
`;

export const navigateBoxWrapper = css`
  ${flexGenerator('column', 'flex-start', 'flex-start')}
  width: 100%;
  padding: 2.8rem 2rem;
  gap: 2.8rem;
`;

export const divdier = css`
  width: 100%;
  height: 0.8rem;
  background-color: #f3f3f3;
`;

export const logoutBox = css`
  ${flexGenerator('row', 'space-between', 'center')}
  width: 100%;

  cursor: pointer;
`;

export const logoutTextStyle = (theme: Theme) => css`
  ${theme.font['subhead03-m-16']}
  color: ${theme.color.blackgray}
`;

export const iconStyle = css`
  width: 2.4rem;
  height: 2.4rem;
`;

export const editIconStyle = css`
  ${flexGenerator('row', 'center', 'flex-end')}
  width: 2.4rem;
  height: 2.4rem;
`;
