import { css, Theme } from '@emotion/react';

import { flexGenerator } from '@styles/generator';

export const noticeStyle = css`
  ${flexGenerator('row', 'flex-start', 'center')}
  gap: 1.4rem;
`;

export const textStyle = (theme: Theme) => css`
  color: ${theme.color.midgray2};
  ${theme.font['body02-r-14']}
`;
