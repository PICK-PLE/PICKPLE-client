import { css, Theme } from '@emotion/react';
import { flexGenerator } from '@styles/generator';

export const devContainer = css`
  position: absolute;
  right: 0;
  top: 0;
  width: 100vw;
  ${flexGenerator('row', 'flex-start', 'flex-start')}
  flex-wrap: wrap;
`;

export const secttionContainer = css`
  width: 37.5rem;
  margin: 2rem;
  padding: 2rem;
  margin-bottom: 1rem;
  ${flexGenerator('column', 'flex-start', 'flex-start')}
  gap: 1.5rem;
  flex-wrap: wrap;
  background-color: #ededed;
`;

export const iconContainerStyle = css`
  ${flexGenerator('row', 'flex-start', 'center')}
  flex-wrap: wrap;
  gap: 1rem;
`;

export const iconWrapperStyle = css`
  ${flexGenerator('row', 'flex-start', 'center')}
  gap: 1rem;
  width: 9rem;
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

export const textStyle = (theme: Theme) => css`
  color: ${theme.color.darkgray};
  /* ${flexGenerator('row', 'center', 'center')} */
`;
