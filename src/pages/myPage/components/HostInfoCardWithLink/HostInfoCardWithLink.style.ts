import { Theme, css } from '@emotion/react';
import { flexGenerator } from '@styles/generator';

export const hostInfoCardWithLinkLayout = css`
  ${flexGenerator('column')}
  width: 100%;
  gap: 2.8rem;
`;

export const hostInfoCardWithLinkContainer = css`
  ${flexGenerator('column', 'center', 'flex-start')};
  width: 100%;
  padding-left: 2rem;
  margin-top: 3rem;
  gap: 1.5rem;
`;

export const hostInfoCardWithLinkWrapper = css`
  ${flexGenerator('column', 'flex-start', 'stretch')};
  gap: 1.6rem;
`;

export const hostInfoWrapper = css`
  ${flexGenerator()};
  gap: 2rem;
`;

export const hostDetailWrapper = css`
  ${flexGenerator('column', 'center', 'flex-start')};

  width: 10.8rem;
  gap: 0.5rem;
`;

export const hostNameStyle = (theme: Theme) => css`
  color: ${theme.color.black};
  ${theme.font['head03-b-18']};
`;

export const linkWrapper = (theme: Theme) => css`
  ${flexGenerator()};
  padding: 0.4rem 0.8rem;
  gap: 0.8rem;

  border-radius: 5px;
  background-color: ${theme.color.background};
`;

export const linkStyle = (theme: Theme) => css`
  color: ${theme.color.midgray1};
  ${theme.font['body03-r-12']}
`;

export const categoryListWrapper = css`
  ${flexGenerator()};
  gap: 0.7rem;
`;

export const categoryStyle = (theme: Theme) => css`
  ${flexGenerator()}
  width: 10.7rem;
  height: 3.4rem;
  padding: 0.5rem 1rem;
  gap: 0.4rem;

  border-radius: 5px;
  background: ${theme.color.purple6};
`;

export const categoryTextStyle = (theme: Theme) => css`
  color: ${theme.color.purple1};
  ${theme.font['body03-r-12']}
`;

export const line = (theme: Theme) => css`
  ${flexGenerator('row', 'center', 'stretch')};
  width: 100%;
  height: 0.8rem;

  background-color: ${theme.color.background};
`;

export const navigateBoxWrapper = css`
  ${flexGenerator('column', 'flex-start', 'flex-start')}
  width: 100%;
  padding-left: 2rem;
  padding-right: 2rem;
  gap: 2.8rem;
`;
