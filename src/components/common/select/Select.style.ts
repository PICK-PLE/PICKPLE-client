import { Theme } from '@emotion/react';
import { css } from '@emotion/react';
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

export const iconStyle = css`
  width: 2.4rem;
  height: 2.4rem;
`;

export const sortList = (theme: Theme) => css`
  ${flexGenerator('column', 'center', 'flex-start')};
  position: absolute;
  top: 6rem;
  left: -0.25rem;
  width: 33.5rem;
  height: 29.5rem;
  padding: 0.4rem;

  border-radius: 10px;
  background: ${theme.color.white};

  box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.15);
`;

export const sortItem = (theme: Theme) => css`
  ${flexGenerator('row', 'flex-start', 'center')}
  display: flex;
  width: 100%;
  padding: 1rem 1.5rem;
  align-items: center;
  gap: 0.2rem;

  cursor: pointer;
  color: ${theme.color.darkgray};
  ${theme.font['body01-r-15']};

  &:hover {
    background-color: ${theme.color.lightgray1};
  }
`;

export const placeholderStyle = (theme: Theme) => css`
  color: ${theme.color.midgray1};
  ${theme.font['body01-r-15']};
`;

export const selectedOptionStyle = (theme: Theme) => css`
  color: ${theme.color.darkgray};
  ${theme.font['body01-r-15']};
`;
