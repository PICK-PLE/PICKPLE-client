import { Theme, css } from '@emotion/react';
import { flexGenerator } from '@styles/generator';

export const headerContainer = css`
  ${flexGenerator('row', 'space-between', 'center')};
  width: 100%;
  padding: 1.95rem 1rem;
  gap: 1rem;
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
