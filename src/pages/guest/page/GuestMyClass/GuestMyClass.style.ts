import { Theme } from '@emotion/react';
import { css } from '@emotion/react';
import { flexGenerator } from '@styles/generator';

export const guestMyClassLayout = css`
  height: 4.4rem;
  align-self: stretch;
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

export const filterSelectWrapper = (theme: Theme) => css`
  ${flexGenerator('row', 'flex-end', 'flex-end')}
  margin-right: 2rem;

  background: ${theme.color.background};
`;

export const guestMyClassCardContainer = (theme: Theme) => css`
  background-color: ${theme.color.background};
`;

export const filterSelectStyle = css`
  margin-top: 1.8rem;
`;

export const completedTabContainer = (theme: Theme) => css`
  ${flexGenerator('column')}
  height: 100dvh;
  padding: 10.4rem 9.3rem 20.9rem 9.3rem;

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
