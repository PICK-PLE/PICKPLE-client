import { css, Theme } from '@emotion/react';
import { flexGenerator } from '@styles/generator';

export const devContainer = css``;

export const secttionContainer = css`
  padding: 2rem;
  margin-bottom: 1rem;
  ${flexGenerator('column', 'flex-start', 'flex-start')}
  gap: 2rem;
  background-color: lightgrey;
`;

export const iconWrapperStyle = css`
  ${flexGenerator()}
  gap: 1rem
`;

export const iconSvgStyle = css`
  width: 2rem;
`;

export const titleStyle = (theme: Theme) => css`
  ${theme.font['body01-r-15']};
`;

export const subTitleStyle = (theme: Theme) => css`
  ${theme.font['body03-r-12']}
`;
