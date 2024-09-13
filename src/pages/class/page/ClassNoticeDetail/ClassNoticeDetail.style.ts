import { Theme, css } from '@emotion/react';

import { flexGenerator } from '@styles/generator';

export const classNoticeDetailContainer = css`
  min-height: 100dvh;
  padding-top: 6rem;
`;
export const line = (theme: Theme) => css`
  width: 100%;
  height: 0.5rem;
  background-color: ${theme.color.bgwhite1};
`;

export const commentSectionWrapper = css`
  ${flexGenerator('row', 'flex-start', 'flex-start')};
  width: 100%;
`;

export const noticeLayout = css`
  height: calc(100dvh - 6rem);
`;

export const commentNumber = (theme: Theme) => css`
  ${flexGenerator('inline-flex', 'flex-start', 'center')};
  margin-top: 1.5rem;
  margin-left: 2rem;
  gap: 0.5rem;

  /* @정안TODO color 추가 */
  color: #000; //일반 black이랑 뭐가 다를까
  ${theme.font['subhead02-sb-16']}
`;

export const noticeCardContainer = (theme: Theme) => css`
  ${flexGenerator('column', 'flex-start', 'flex-start')};
  width: 100%;
  padding: 2rem;
  background-color: ${theme.color.white};
  border-radius: 10px;
  gap: 2rem;
`;

export const noticeTitle = (theme: Theme) => css`
  ${theme.font['head04-b-16']};
  color: ${theme.color.blackgray};
  margin-bottom: 1rem;
`;

export const noticeContent = (theme: Theme) => css`
  ${theme.font['body02-r-14']};
  color: ${theme.color.midgray2};
  margin-bottom: 2rem;
  white-space: pre-line;
`;

export const noticeImage = css`
  width: 100%;
  aspect-ratio: 295 / 210;
  object-fit: cover;

  border-radius: 10px;

  margin-bottom: 2rem;
`;

export const noticeDate = (theme: Theme) => css`
  ${theme.font['body03-r-12']};
  color: ${theme.color.midgray1};
`;

export const iconStyle = css`
  width: 15rem;
  height: 15rem;
`;

export const commentListWrapper = css`
  ${flexGenerator('column', 'flex-start', 'flex-start')}
  height: 100%;
  overflow: scroll;
`;
