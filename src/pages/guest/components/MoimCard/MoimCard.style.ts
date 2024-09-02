import { Theme, css } from '@emotion/react';

import { flexGenerator } from '@styles/generator';

export const moimCardLayout = (theme: Theme) => css`
  ${flexGenerator('column')};
  gap: 1.2rem;
  padding: 1.8rem;

  border: 1px solid ${theme.color.lightgray0};
  border-radius: 10px;

  background: ${theme.color.white};
`;

export const moimCardContainer = css`
  ${flexGenerator('row', 'flex-start', 'flex-start')};
  width: 100%;
  gap: 1rem;

  position: relative;
`;

export const titleStyle = (theme: Theme) => css`
  color: ${theme.color.black};
  ${theme.font['subhead04-sb-15']};
`;

export const iconStyle = css`
  min-width: 2.4rem;
  min-height: 2.4rem;
  width: 2.4rem;
  height: 2.4rem;
`;

export const titleWrapper = css`
  ${flexGenerator('row', 'space-between', 'center')}
  width: 100%;
  gap: 0.4rem;

  cursor: pointer;
`;

export const detailInfoWrapper = css`
  ${flexGenerator('column', 'flex-start', 'flex-start')}
  display: flex;
  width: 100%;
  gap: 1.2rem;
  align-self: stretch;
`;

export const detailWrapper = css`
  ${flexGenerator('column', 'flex-start', 'flex-start')}
  width: 100%;
  gap: 0.2rem;
`;

export const detailTitleWrapper = css`
  ${flexGenerator('row', 'flex-start', 'flex-start')}
  width: 100%;
  gap: 2.5rem;
`;

export const detailTitleStyle = (theme: Theme) => css`
  width: 4.2rem;
  color: ${theme.color.midgray1};
  ${theme.font['body03-r-12']};
`;

export const detailInfoStyle = (theme: Theme) => css`
  color: ${theme.color.midgray2};
  ${theme.font['body04-m-12']};
`;

export const imageCustomStyle = css`
  object-position: right;
`;
