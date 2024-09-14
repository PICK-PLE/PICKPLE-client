import { Theme, css } from '@emotion/react';

import { flexGenerator } from '@styles/generator';

export const commentSectionContainer = (theme: Theme) => css`
  display: grid;
  width: 100%;
  height: calc(100% -6rem);
  min-width: 37.5rem;

  border-bottom: 1px solid ${theme.color.lightgray0};
  background: ${theme.color.bg_white1};
`;

export const commentContainer = (isOwner: boolean) => (theme: Theme) => css`
  ${flexGenerator('row', 'space-between', 'flex-start')};
  padding: 1.7rem 1.3rem 1.7rem 2rem;
  gap: 1rem;
  background: ${isOwner ? theme.color.bg_white1 : theme.color.white};
  width: 100%;
`;

export const profileImageWrapper = css`
  ${flexGenerator('row', 'flex-start', 'flex-start')};
  width: 4.2rem;
`;

export const profileWrapper = css`
  ${flexGenerator('row', 'flex-start', 'flex-start')};
  gap: 0.4rem;
`;

export const commentWrapper = css`
  ${flexGenerator('column', 'flex-start', 'flex-start')};
  min-width: 25.6rem;
  flex: 1;
  gap: 0.6rem;
`;

export const userNickname = (theme: Theme) => css`
  color: ${theme.color.blackgray};
  ${theme.font['subhead05-sb-14']}
`;

export const commentContent = (theme: Theme) => css`
  color: ${theme.color.blackgray};
  ${theme.font['body01-r-15']}
  overflow-wrap: break-word;
  word-break: break-all;
  flex-wrap: wrap;
`;

export const commentTime = (theme: Theme) => css`
  color: var(--Gray-Scale-midgray1, #9fa4ae);
  ${theme.font['body04-m-12']}
`;

export const iconWrapper = css`
  position: relative;
`;

export const iconStyle = css`
  width: 2.4rem;
  height: 2.4rem;
`;

export const spickerIconStyle = css`
  width: 1.6rem;
  height: 1.6rem;

  cursor: pointer;
`;
