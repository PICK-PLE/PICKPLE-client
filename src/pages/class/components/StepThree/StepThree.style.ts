import { Theme, css } from '@emotion/react';
import { flexGenerator } from '@styles/generator';

export const layoutStyle = css`
  ${flexGenerator('column')};
  padding: 3.2rem 2rem 3rem 2rem;
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
`;

export const headerSpanStyle = (theme: Theme) => css`
  color: ${theme.color.midgray2};
  ${theme.font['body02-r-14']}
`;

export const mainStyle = css`
  ${flexGenerator('column')};
  gap: 3rem;
  width: 100%;

  margin-top: 3.8rem;
  margin-bottom: 3.8rem;
`;

export const sectionStyle = css`
  ${flexGenerator('column')};
  gap: 1rem;
  width: 100%;
`;
export const imageSelectSection = css`
  ${flexGenerator('column', 'center', 'flex-start')}
  width: 100%;
  gap: 1rem;
`;

export const referTextStyle = (theme: Theme) => css`
  ${flexGenerator('row', 'flex-start')};
  width: 100%;

  color: ${theme.color.midgray1};
  ${theme.font['body02-r-14']}
`;
export const footerStyle = css`
  margin-top: auto;
  width: 100%;
`;
