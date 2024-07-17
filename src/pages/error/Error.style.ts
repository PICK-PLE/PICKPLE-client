import { Theme } from '@emotion/react';
import { css } from '@emotion/react';
import { flexGenerator } from '@styles/generator';

export const errorWrapper = css`
  ${flexGenerator('column')};
  padding: 12.8rem 6.2rem 20.9rem 6.2rem;
  gap: 2rem;
`;

export const errorIconStyle = css`
  width: 15rem;
  height: 15rem;
`;

export const errorBox = css`
  ${flexGenerator('column', 'center', 'center')}
  width: 100%;
`;

export const textStyle = (theme: Theme) => css`
  color: ${theme.color.lightgray2};
  ${theme.font['subhead05-sb-14']}
`;

export const buttonStyle = css`
  width: 17.7rem;
`;
