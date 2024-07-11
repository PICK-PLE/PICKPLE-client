import { Theme } from '@emotion/react';
import { css } from '@emotion/react';
import { flexGenerator } from '@styles/generator';

export const moimCardContainer = css`
  ${flexGenerator('row', 'flex-start', 'flex-start')};
  gap: 1rem;

  position: relative;
`;

export const titleStyle = (theme: Theme) => css`
  color: ${theme.color.black};
  ${theme.font['subhead04-sb-15']};
`;

export const iconStyle = css`
  ${flexGenerator()}
  width: 2.4rem;
  height: 2.4rem;

  cursor: pointer;
`;

export const titleWrapper = css`
  ${flexGenerator()}
  gap: 0.4rem;
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
  width: 16%;
  color: ${theme.color.darkgray};
  ${theme.font['body03-r-12']};
`;

export const detailInfoStyle = (theme: Theme) => css`
  color: ${theme.color.darkgray};
  ${theme.font['body04-m-12']};
`;
