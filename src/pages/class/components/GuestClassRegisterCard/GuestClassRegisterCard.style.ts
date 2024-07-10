import { Theme } from '@emotion/react';
import { css } from '@emotion/react';
import { flexGenerator } from '@styles/generator';

export const cardContainerStyle = (theme: Theme) => css`
  ${flexGenerator('column')}
  gap: 1.9rem;

  min-width: 33.5rem;
  width: 100%;
  padding: 1.5rem;

  border: 0.5px solid ${theme.color.lightgray1};
  border-radius: 10px;
`;

export const headSectionStyle = css`
  ${flexGenerator()}
  gap: 1.7rem
`;

export const titleAndProfileWrapperStyle = css`
  ${flexGenerator('column', 'center', 'start')}
  gap: 0.8rem;
`;

export const titleStyle = (theme: Theme) => css`
  color: ${theme.color.black};
  ${theme.font['subhead02-sb-16']}
`;

export const spotAndDateSectionStyle = css`
  ${flexGenerator('column', 'center', 'start')}
  gap: 1rem;
  width: 100%;
`;
export const textSpanStyle = (theme: Theme) => css`
  color: ${theme.color.blackgray};
  ${theme.font['body02-r-14']}
`;

export const iconAndSpanStyle = css`
  ${flexGenerator()}
  gap: 0.9rem
`;

export const iconStyle = css`
  width: 2.4rem;
  height: 2.4rem;
`;

export const dividerStyle = (theme: Theme) => css`
  width: 100%;
  min-width: 30.5rem;
  height: 0.1rem;

  background-color: ${theme.color.lightgray1};
`;

export const feeWrapperStyle = css`
  ${flexGenerator('row', 'space-between')}
  width: 100%;
`;
export const feeSpanStyle = (theme: Theme) => css`
  color: ${theme.color.midgray1};
  ${theme.font['subhead02-sb-16']}
`;
export const feeStyle = (theme: Theme) => css`
  color: ${theme.color.black};
  ${theme.font['subhead02-sb-16']}
`;
