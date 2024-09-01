import { css, Theme } from '@emotion/react';

import { flexGenerator } from '@styles/generator';

export const hostInfoCardContainer = (theme: Theme) => css`
  ${flexGenerator('row', 'flex-start', 'center')}
  gap: 1.5rem;
  width: 100%;
  height: 9.7rem;
  padding: 1rem;
  border-radius: 10px;
  background-color: ${theme.color.bg_white0};
`;
export const hostInfoCardWrapper = css`
  ${flexGenerator('column', 'center', 'flex-start')}
  gap: 1.1rem;
`;

export const hostInfoTitleStyle = css`
  ${flexGenerator()}
  gap: 0.4rem;
`;

export const hostTitleStyle = (theme: Theme) => css`
  color: ${theme.color.black};
  ${theme.font['subhead03-m-16']}
`;

export const hostNameStyle = (theme: Theme) => css`
  color: ${theme.color.black};
  ${theme.font['head04-b-16']}
`;

export const countStyle = (theme: Theme) => css`
  color: ${theme.color.midgray2};
  ${theme.font['body03-r-12']}
`;

export const hostInfoLabelStyle = css`
  ${flexGenerator()}
  gap: 0.5rem;
`;

export const imageStyle = css`
  object-position: right;
`;
