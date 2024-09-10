import { css, Theme } from '@emotion/react';

import { flexGenerator } from '@styles/generator';

export const hostInfoWrapper = (theme: Theme) => css`
  ${flexGenerator('row', 'flex-start', 'center')};
  gap: 1.5rem;
  padding: 1.4rem;
  background-color: ${theme.color.bg_white0};
  border: 1px solid ${theme.color.lightgray0};
  border-radius: 10px;
  width: 100%;
  height: 9.7rem;
  padding: 1rem;
  border-radius: 10px;
  background-color: ${theme.color.bg_white0};
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
  color: ${theme.color.purple2};
  ${theme.font['body03-r-12']}
`;

export const hostDescriptionWrapper = (theme: Theme) => css`
  color: ${theme.color.midgray2};
  ${theme.font['body03-r-12']};
`;
