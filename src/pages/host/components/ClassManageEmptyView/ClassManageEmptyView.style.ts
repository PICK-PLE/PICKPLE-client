import { css, Theme } from '@emotion/react';
import { flexGenerator } from '@styles/generator';

export const emptyViewContainer = css`
  ${flexGenerator('column', 'center', 'center')};
  gap: 2.1rem;
`;

export const emptyViewWrapper = css`
  ${flexGenerator('column', 'center', 'center')}
`;

export const emptyViewImageStyle = css`
  width: 15rem;
`;

export const emptyViewButtonStyle = css`
  width: 17.7rem;
  
`;

export const emptyText = (theme: Theme) => css`
  ${flexGenerator('column')};
  ${theme.font['subhead05-sb-14']};
  color: ${theme.color.lightgray1};
`;
