import { Theme, css } from '@emotion/react';

import { flexGenerator } from '@styles/generator';

export const wrapperStyle = css`
  ${flexGenerator('row', 'space-between', 'center')}
  width: 100%;

  cursor: pointer;
`;

export const childrenStyle = (theme: Theme) => css`
  ${theme.font['subhead03-m-16']};
  color: ${theme.color.blackgray};
`;
export const iconStyle = css`
  width: 2.4rem;
  height: 2.4rem;
`;
