import { Theme, css } from '@emotion/react';

import { flexGenerator } from '@styles/generator';

export const noticeCardContainer = (theme: Theme) => css`
  ${flexGenerator('column', 'flex-start', 'flex-start')};
  width: 100%;
  padding: 2rem;
  background-color: ${theme.color.white};
  border: 1px solid ${theme.color.lightgray0};
  border-radius: 10px;

  gap: 2rem;
  cursor: pointer;
`;

export const profileWrapper = css`
  ${flexGenerator('row', 'flex-start')};
  gap: 1.2rem;
`;

export const profileImage = css`
  width: 4.2rem;
  height: 4.2rem;
  border-radius: 50%;
`;

export const profileTextBox = css`
  ${flexGenerator('column', 'center', 'flex-start')};
`;

export const profilePosition = (theme: Theme) => css`
  ${theme.font['body04-m-12']};
  color: ${theme.color.midgray2};
`;

export const profileHostInfo = css`
  ${flexGenerator('row', 'flex-start', 'center')};
  gap: 0.4rem;
`;

export const profileName = (theme: Theme) => css`
  ${theme.font['subhead05-sb-14']};
  color: ${theme.color.blackgray};
`;

export const porfileHostMark = css`
  width: 1.6rem;
`;

export const noticeWrapper = css`
  width: 100%;
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

export const noticeInfo = css`
  ${flexGenerator('row', 'space-between', 'center')}
`;

export const noticeDate = (theme: Theme) => css`
  ${theme.font['body03-r-12']};
  color: ${theme.color.midgray1};
`;

export const noticeComment = css`
  ${flexGenerator()};
  gap: 0.3rem;
`;

export const noticeCommentIcon = css`
  width: 1.7rem;
`;

export const noticeCommentNumber = (theme: Theme) => css`
  color: ${theme.color.midgray2};
  ${theme.font['body04-m-12']};
`;
