import { css, Theme } from '@emotion/react';

import { flexGenerator } from '@styles/generator';

export const backdropStyle = css`
  position: fixed;
  left: 0;
  top: 0;

  width: 100%;
  height: 100%;

  z-index: 3;
`;

export const deleteCardWrapper = (theme: Theme) => css`
  ${flexGenerator('row', 'flex-start')};
  padding-left: 1.4rem;
  width: 14.5rem;
  height: 5.6rem;
  border-radius: 5px;
  box-shadow: 0 0.5rem 2rem 0 rgba(0, 0, 0, 0.15);

  ${theme.font['subhead03-m-16']};
  color: ${theme.color.darkgray};
  background-color: ${theme.color.white};

  z-index: 4;
  position: absolute;
  top: 2.4rem;
  right: 1.2rem;

  cursor: pointer;
`;
