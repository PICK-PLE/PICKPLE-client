import { Theme, css } from '@emotion/react';
import { flexGenerator } from '@styles/generator';

export const headerContainer = (isLine: boolean) => (theme: Theme) =>
  css`
    position: fixed;
    top: 0;
    z-index: 2;
    ${flexGenerator('row', 'space-between', 'center')};
    width: 100%;
    max-width: 43rem;
    height: 6rem;
    padding: 0 2rem;
    gap: 1rem;

    border-bottom: ${isLine ? `0.1rem solid ${theme.color.lightgray1}` : 'none'};

    background-color: ${theme.color.white};
  `;

export const headerTitle = (theme: Theme) => css`
  ${flexGenerator('row', 'flex-start', 'center')}
  color: ${theme.color.black};
  ${theme.font['subhead01-sb-18']}
`;

export const leftWrapper = css`
  ${flexGenerator('row', 'flex-start', 'center')};
  width: 20%;
`;

export const centerWrapper = css`
  ${flexGenerator()};
  width: 60%;
`;

export const rightWrapper = css`
  ${flexGenerator('row', 'flex-end', 'center')};
  width: 20%;
`;

export const iconContainer = css`
  width: 2.4rem;
  height: 2.4rem;

  cursor: pointer;
`;
