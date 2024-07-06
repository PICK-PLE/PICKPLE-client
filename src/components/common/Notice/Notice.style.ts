import { css, Theme } from '@emotion/react';
import { flexGenerator } from '@styles/generator';

export const noticeStyle = css`
  ${flexGenerator('row', 'first', 'center')}
  gap: 1.4rem;
  margin-left: 2rem;
  margin-right: 4.4rem;
`;

export const textStyle = (theme: Theme) => css`
  color: ${theme.color.midgray2};
  ${theme.font['body02-r-14']}
`;
