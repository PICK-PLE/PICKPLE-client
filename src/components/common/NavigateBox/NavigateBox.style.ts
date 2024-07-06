import { Theme } from '@emotion/react';
import { css } from '@emotion/react';
import { flexGenerator } from '@styles/generator';

export const wrapperStyle = css`
  ${flexGenerator('row', 'space-between', 'center')}
  width: 100%;
  min-width: 33.5rem;
`;

export const childrenStyle = (theme: Theme) => css`
  ${theme.font['subhead03-m-16']}
  ${theme.color.blackgray}
`;
export const iconStyle = css`
  width: 2.4rem;
  height: 2.4rem;
`;
