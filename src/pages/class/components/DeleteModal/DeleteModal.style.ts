import { css, Theme } from '@emotion/react';
import { flexGenerator } from '@styles/generator';

export const deleteModalContainer = css`
  ${flexGenerator('column', 'flex-start', 'flex-start')};
  display: flex;
  padding: 3rem 1rem 1rem 1rem;
  gap: 1rem;
`;

export const deleteModalWrapper = css`
  ${flexGenerator('column', 'flex-start', 'flex-start')};
  gap: 3rem;
`;

export const detailWrapper = css`
  ${flexGenerator('column', 'center', 'center')}
  gap: 3rem;
`;

export const title = (theme: Theme) => css`
  color: ${theme.color.blackgray};
  text-align: center;
  ${theme.font['subhead02-sb-16']}
`;

export const buttonWrapper = css`
  ${flexGenerator('row', 'space-between', 'center')}
  gap: 0.9rem;
`;

export const cancelButtonStyle = (theme: Theme) => css`
  ${flexGenerator('row', 'center', 'center')};
  width: 12.7rem;
  height: 4.6rem;
  padding: 0.8rem;
  gap: 0.8rem;

  border-radius: 5px;
  border: none;
  background: ${theme.color.lightgray1};
`;

export const cancelButtonText = (theme: Theme) => css`
  color: ${theme.color.midgray2};
  text-align: center;
  ${theme.font['subhead03-m-16']}
`;

export const deleteButtonStyle = (theme: Theme) => css`
  ${flexGenerator('row', 'center', 'center')};
  width: 12.7rem;
  height: 4.6rem;
  padding: 0.8rem;
  gap: 0.8rem;

  border-radius: 5px;
  border: none;
  background: ${theme.color.purple1};
`;

export const deleteButtonText = (theme: Theme) => css`
  color: ${theme.color.white};
  text-align: center;
  ${theme.font['subhead02-sb-16']}
`;
