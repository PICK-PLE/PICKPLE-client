import { Theme } from '@emotion/react';
import { css } from '@emotion/react';
import { flexGenerator } from '@styles/generator';

export const cardContainerStyle = css`
  ${flexGenerator('column')}
  gap: 1.9rem;

  min-width: 33.5rem;
  width: 100%;
  padding: 1.5rem;
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

export const iconAndSpanStyle = css`
  ${flexGenerator()}
  gap: 0.9rem
`;

export const dividerStyle = (theme: Theme) => css`
  width: 100%;
  min-width: 30.5rem;
  height: 0.1rem;

  background-color: ${theme.color.lightgray1};
`;
