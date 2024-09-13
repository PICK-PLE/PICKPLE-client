import { Theme, css } from '@emotion/react';

import { flexGenerator } from '@styles/generator';

export const selectContainer = (theme: Theme) => css`
  ${flexGenerator('row', 'space-between', 'center')};
  position: relative;
  width: 100%;
  height: 5.2rem;
  padding: 1.5rem;

  color: ${theme.color.darkgray};
  ${theme.font['body04-m-12']};

  border-radius: 10px;
  border: 1px solid ${theme.color.lightgray1};
  background: ${theme.color.white};
`;

export const iconStyle = (theme: Theme) => css`
  width: 2.4rem;
  height: 2.4rem;

  path {
    fill: ${theme.color.midgray1};
  }
`;

export const sortList = (theme: Theme) => css`
  ${flexGenerator('column', 'center', 'flex-start')};
  position: absolute;
  top: 6rem;
  left: -0.25rem;
  width: 100%;
  padding: 0.4rem;

  border-radius: 10px;
  background: ${theme.color.white};

  box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.15);

  z-index: 2;
`;

export const sortItem = (theme: Theme) => css`
  ${flexGenerator('row', 'flex-start', 'center')}
  width: 100%;
  padding: 1rem 1.5rem;
  gap: 0.2rem;

  cursor: pointer;
  color: ${theme.color.darkgray};
  ${theme.font['body06-m-15']};

  &:hover {
    background-color: ${theme.color.lightgray1};
  }
`;

export const placeholderStyle = (theme: Theme) => css`
  color: ${theme.color.midgray1};
  ${theme.font['body06-m-15']};
`;

export const selectedOptionStyle = (theme: Theme) => css`
  color: ${theme.color.darkgray};
  ${theme.font['body06-m-15']};
`;
