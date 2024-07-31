import { Theme , css } from '@emotion/react';
import { flexGenerator } from '@styles/generator';

export const errorContainer = css`
  ${flexGenerator('column')};
  height: calc(100dvh - 6rem);
`;

export const errorWrapper = css`
  ${flexGenerator('column')};
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
