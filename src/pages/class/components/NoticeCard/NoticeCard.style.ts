import { Theme, css } from '@emotion/react';
import { flexGenerator } from '@styles/generator';

export const noticeCardContainer = (theme: Theme) => css`
  ${flexGenerator('column', 'flex-start', 'flex-start')};

  padding: 2rem;

  background-color: ${theme.color.white};
  border-radius: 10px;

  gap: 2rem;
`;

export const profileWrapper = css`
  ${flexGenerator('row', 'flex-start')};
  gap: 0.7rem;
`;

export const profileImage = css`
  border-radius: 50%;
`;

export const profileTextBox = css`
  ${flexGenerator('column', 'center', 'flex-start')};
`;

export const profilePosition = (theme: Theme) => css`
  ${theme.font['body04-m-12']};
  color: ${theme.color.midgray2};
`;

export const profileName = (theme: Theme) => css`
  ${theme.font['subhead05-sb-14']};
  color: ${theme.color.blackgray};
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
