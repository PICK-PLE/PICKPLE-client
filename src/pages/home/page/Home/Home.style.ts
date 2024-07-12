import { Theme, css } from '@emotion/react';
import { flexGenerator } from '@styles/generator';

export const homeBannerStyle = css`
  width: 100%;
  height: 28rem;
  background-color: pink;
`;

export const categoryContainer = css`
  ${flexGenerator('column')}
  width: 100%;
  margin-top: 4rem;
  gap: 2rem;
`;

export const titleStyle = (theme: Theme) => css`
  color: ${theme.color.black};
  ${theme.font['head03-b-18']}
`;

export const categoryWrapper = css`
  ${flexGenerator('column', 'center', 'flex-start')};
  gap: 1.6rem;
`;

export const categoryStyle = css`
  ${flexGenerator()};
  width: 100%;
  gap: 1.2rem;
`;

export const iconStyle = css`
  ${flexGenerator('column')};
  width: 5.7rem;
  height: 5.7rem;

  cursor: pointer;
`;

export const iconNameStyle = (theme: Theme) => css`
  color: ${theme.color.midgray2};
  ${theme.font['body04-m-12']}
`;

export const homeStyle = css`
  min-height: calc(100dvh - 6rem);
`;
