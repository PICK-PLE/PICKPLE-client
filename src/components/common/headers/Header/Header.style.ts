import { Theme } from '@emotion/react';
import { css } from '@emotion/react';
import { flexGenerator } from '@styles/generator';

export const headerContainer = css`
  ${flexGenerator()};
  width: 100%;
  padding: 1.95rem 1rem;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`;

export const headerTitle = (theme: Theme) => css`
  /* position: fixed; */
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
  /* ${flexGenerator('row', 'center', 'center')}; */
  width: 2.4rem;
  height: 2.4rem;
`;

export const divider = css`
  width: 100%;
`;
