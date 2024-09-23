import { css, Theme } from '@emotion/react';

import { flexGenerator } from '@styles/generator';

export const emptyViewContainer = css`
  ${flexGenerator('column', 'center', 'center')}
  margin-top: 3rem;
  margin-bottom: 7rem;
`;

export const iconStyle = css`
  width: 15rem;
  height: 15rem;
`;

export const textStyle = (theme: Theme) => css`
  color: ${theme.color.lightgray2};
  text-align: center;
  ${theme.font['subhead05-sb-14']}
`;
