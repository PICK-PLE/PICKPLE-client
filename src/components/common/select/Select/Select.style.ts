import { Theme } from '@emotion/react';
import { css } from '@emotion/react';
import { flexGenerator } from '@styles/generator';

export const selectContainer = (theme: Theme) => css`
  ${flexGenerator('row', 'space-between', 'center')};
  position: relative;
  width: 8.7rem;
  height: 2.8rem;
  padding: 0.8rem;

  color: ${theme.color.darkgray};
  ${theme.font['body04-m-12']};

  border-radius: 5px;
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
  top: 3.6rem;
  width: 11.5rem;
  height: 17.6rem;
  padding: 0.4rem;

  border-radius: 5px;
  background: ${theme.color.white};

  box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.15);
`;

export const sortItem = (theme: Theme) => css`
  ${flexGenerator('row', 'flex-start', 'center')}
  width: 100%;
  height: 2.8rem;
  padding: 0.8rem 0.8rem 0.8rem 1rem;
  gap: 0.2rem;

  cursor: pointer;

  &:hover {
    background-color: ${theme.color.lightgray1};
  }
`;
