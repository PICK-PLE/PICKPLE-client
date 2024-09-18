import { css, Theme } from '@emotion/react';

import { flexGenerator } from '@styles/generator';

export const changeNicknameModalLayout = (theme: Theme) => css`
  ${flexGenerator('column', 'center', 'center')};

  width: 28.3rem;
  height: 28.2rem;
  padding: 3.7rem 1rem 1rem 1rem;

  border-radius: 10px;
  background: ${theme.color.white};

  gap: 2rem;
`;

export const changeNicknameModalWrapper = css`
  ${flexGenerator('column', 'center', 'center')};
  width: 100%;
  gap: 1.6rem;
`;

export const modalTitleWrapper = css`
  ${flexGenerator('column', 'center', 'center')}
  width: 100%;
  gap: 3rem;
`;

export const modalTitle = css`
  ${flexGenerator('column', 'center', 'center')}
  gap: 0.6rem;
`;

export const titleStyle = (theme: Theme) => css`
  color: ${theme.color.black};
  text-align: center;
  ${theme.font['head03-b-18']}
`;

export const blueColor = (theme: Theme) => css`
  color: ${theme.color.purple1};
  text-align: center;
  ${theme.font['subhead06-m-14']}
`;

export const descriptionWrapper = css`
  display: flex;
  gap: 0.3rem;
`;

export const descriptionStyle = (theme: Theme) => css`
  color: ${theme.color.midgray2};
  text-align: center;
  ${theme.font['body02-r-14']}
`;

export const modalHeaderWrapper = css`
  ${flexGenerator('column', 'center', 'center')}
  gap: 0.3rem
`;

export const inputWrapper = css`
  width: 100%;
`;

export const buttonWrapper = css`
  ${flexGenerator()}
  min-width: 26.3rem;
  width: 100%;
  gap: 0.9rem;
`;

export const cancelButtonStyle = (theme: Theme) => css`
  background-color: ${theme.color.lightgray1};
  text-align: center;
  color: ${theme.color.midgray2};
  ${theme.font['subhead03-m-16']}
`;

export const disabledStyle = (theme: Theme) => css`
  border-radius: 5px;
  background: ${theme.color.midgray1};
  color: ${theme.color.white};
  ${theme.font['subhead03-m-16']}
`;

export const abledStyle = (theme: Theme) => css`
  border-radius: 5px;
  background: ${theme.color.purple1};
  color: ${theme.color.white};
  ${theme.font['subhead03-m-16']}
`;
