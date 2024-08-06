import { Theme, css } from '@emotion/react';

import { flexGenerator } from '@styles/generator';

export const guestMyClassLayout = css`
  padding-top: 6rem;
`;

export const guestMyClassContainer = css`
  height: 4.4rem;
  align-self: stretch;
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

export const mainWrapper = css`
  height: calc(100dvh - 10.4rem);
  padding: 0 2rem 2rem;

  overflow-y: auto;
`;

export const getTabStyle = (isActive: boolean) => (theme: Theme) => css`
  ${tapContainer(theme)}
  ${isActive ? activeTabStyle(theme) : inactiveTabStyle(theme)}
    ${theme.font['subhead02-sb-16']}
`;

export const filterSelectWrapper = css`
  ${flexGenerator('row', 'flex-end', 'flex-end')}/* margin-right: 2rem; */
`;

export const classCardList = css`
  ${flexGenerator('column')};
  margin-top: 1.8rem;
  gap: 1rem;
`;

export const guestMyClassCardContainer = css`
  width: 100%;
`;

export const filterSelectStyle = css`
  margin-top: 1.8rem;
`;

export const GuestMyClassBackground = (theme: Theme) => css`
  background-color: ${theme.color.background};
`;
