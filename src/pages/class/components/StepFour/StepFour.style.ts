import { Theme, css } from '@emotion/react';
import { flexGenerator } from '@styles/generator';

export const layoutStyle = css`
  ${flexGenerator('column')};
  padding: 3.1rem 2rem 2.7rem;
  //header + progressbar 높이 = 6.6rem
  min-height: calc(100dvh - 6.6rem);
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
  margin-bottom: 0.7rem;
`;

export const headerSpanStyle = (theme: Theme) => css`
  color: ${theme.color.midgray2};
  ${theme.font['body02-r-14']}
`;

export const mainStyle = css`
  ${flexGenerator()};
  width: 100%;
  gap: 5rem;
  padding: 0 0.75rem;

  margin-top: 2.8rem;
`;

export const imageStyle = css`
  min-width: 32rem;
  min-height: 32rem;
`;

export const footerStyle = css`
  margin-top: auto;
  width: 100%;
`;
