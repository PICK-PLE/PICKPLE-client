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
  gap: 1.5rem;
`;

export const hostInfoCardWithLinkWrapper = css`
  ${flexGenerator('column', 'flex-start', 'stretch')};
  width: 100%;
  gap: 1.6rem;
`;

export const hostInfoCardWrapper = (theme: Theme) => css`
  ${flexGenerator('row', 'space-between', 'center')};
  background-color: ${theme.color.bg_white0};
  border: 1px solid ${theme.color.lightgray0};
  border-radius: 10px;

  padding: 2rem 1rem 2rem 1.4rem;

  cursor: pointer;
`;

export const hostInfoWrapper = css`
  ${flexGenerator('row', 'center', 'center')};
  gap: 1.5rem;
`;

export const hostDetailWrapper = css`
  ${flexGenerator('column', 'center', 'flex-start')};
  gap: 1rem;
`;

export const hostProfileWrapper = css`
  ${flexGenerator('column', 'center', 'flex-start')};
  gap: 0.2rem;
`;

export const hostNameMarkWrapper = css`
  ${flexGenerator()}
  gap: 0.8rem;
`;

export const hostNameWrapper = css`
  ${flexGenerator()}
  gap: 0.4rem
`;

export const hostMarkIconStyle = css`
  width: 1.9rem;
  height: 1.9rem;
`;

export const hostMarkMessageWrapper = (theme: Theme) => css`
  ${flexGenerator()}
  width: 4.8rem;
  height: 2.1rem;
  background-color: ${theme.color.purple5};
  border-radius: 5px;
`;

export const hostMarkMessageStyle = (theme: Theme) => css`
  color: ${theme.color.purple1};
  ${theme.font['body03-r-12']}
`;

export const hostNameStyle = (theme: Theme) => css`
  color: ${theme.color.black};
  ${theme.font['head04-b-16']};
`;

export const hostKeywordStyle = (theme: Theme) => css`
  color: ${theme.color.midgray2};
  ${theme.font['body03-r-12']}
`;

export const hostCountWrapper = (theme: Theme) => css`
  color: ${theme.color.darkgray} ${theme.font['body04-m-12']};
`;

export const hostCountColorStyle = (theme: Theme) => css`
  color: ${theme.color.purple1};
`;

export const nextIconStyle = css`
  width: 2.4rem;
  height: 2.4rem;

  cursor: pointer;
`;
