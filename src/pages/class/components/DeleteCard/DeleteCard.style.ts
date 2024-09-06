import { css, Theme } from '@emotion/react';
import { flexGenerator } from '@styles/generator';

export const deleteCardContainer = (theme: Theme) => css`
  ${flexGenerator('column', 'center', 'flex-start')};
  padding: 0.4rem;
  width: 14.5rem;
  height: 5.6rem;
  border-radius: 5px;
  background: ${theme.color.white};
  box-shadow: 0 0.5rem 2rem 0 rgba(0, 0, 0, 0.15);

  position: absolute;
  right: 1rem;

  cursor: pointer;
`;

export const deleteCardWrapper = css`
  ${flexGenerator('row', 'center', 'center')}
  padding: 0.8rem 0.8rem 0.8rem 1rem;
  gap: 0.2rem;
`;

export const deleteText = (theme: Theme) => css`
  color: ${theme.color.darkgray};
  ${theme.font['subhead03-m-16']}
`;
