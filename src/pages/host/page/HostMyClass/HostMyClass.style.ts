import { Theme, css } from '@emotion/react';

import { flexGenerator } from '@styles/generator';

export const hostMyClassLayout = css`
  width: 100%;
  padding-top: 6rem;
`;

export const hostMyClassContainer = css`
  ${flexGenerator('column', 'center', 'stretch')};
  height: 4.4rem;
`;

export const tapLine = (theme: Theme) => css`
  width: 100%;
  height: 0.1rem;

  ${theme.color.lightgray1}
`;

export const tapContainer = (theme: Theme) => css`
  ${flexGenerator('row', 'center', 'center')}
  width: 50%;
  height: 4.4rem;
  padding: 0.8rem;
  gap: 0.8rem;
  flex-shrink: 0;

  background: ${theme.color.white};

  cursor: pointer;
`;

export const activeTabStyle = (theme: Theme) => css`
  color: ${theme.color.purple1};
  border-bottom: 0.1rem solid ${theme.color.purple1};
`;

export const inactiveTabStyle = (theme: Theme) => css`
  color: ${theme.color.lightgray2};
  border-bottom: 0.1rem solid ${theme.color.lightgray2};
`;

export const tabWrapper = css`
  ${flexGenerator()}
`;

export const getTabStyle = (isActive: boolean) => (theme: Theme) =>
  css`
    ${tapContainer(theme)}
    ${isActive ? activeTabStyle(theme) : inactiveTabStyle(theme)}
    ${theme.font['subhead02-sb-16']}
  `;

export const hostMyClassCardContainer = css`
  ${flexGenerator('column')};
  width: 100%;
  padding: 3rem 2rem;
  gap: 1rem;
`;

// export const hostMyClassContainer = css`
//   ${flexGenerator('column')};
//   gap: 3rem;
// `;

export const hostMyClassBackground = (theme: Theme) => css`
  width: 100%;
  background-color: ${theme.color.background};
  min-height: 100dvh;
`;
