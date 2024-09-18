import { Theme, css } from '@emotion/react';

import { flexGenerator } from '@styles/generator';

export const layoutStyle = css`
  ${flexGenerator('column')};
  width: 100%;
  padding: 3.2rem 2rem 3rem 2rem;
`;
export const headerStyle = css`
  ${flexGenerator('column', 'center', 'start')};
  gap: 0.3rem;
  width: 100%;
`;

export const titleStyle = (theme: Theme) => css`
  color: ${theme.color.purple1};
  ${theme.font['subhead05-sb-14']};
`;

export const subTitleStyle = (theme: Theme) => css`
  color: ${theme.color.black};
  ${theme.font['head01-b-22']};
`;
export const mainStyle = css`
  width: 100%;
  ${flexGenerator('column')};
  gap: 6rem;
  width: 100%;

  margin-top: 3.8rem;
  margin-bottom: 5.4rem;
`;

export const sectionStyle = (gapSize: number) => css`
  ${flexGenerator('column', 'flex-start', 'flex-start')};
  gap: ${gapSize}rem;
  width: 100%;
`;

export const referTextStyle = (theme: Theme) => css`
  ${flexGenerator('row', 'flex-start')};
  width: 100%;

  color: ${theme.color.midgray1};
  ${theme.font['body02-r-14']}
`;
export const footerStyle = css`
  width: 100%;
`;

export const preventDragStyle = css`
  user-select: none;
`;
