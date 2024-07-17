import { Theme, css } from '@emotion/react';
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
  top: 3.2rem;
  right: 0;
  width: 11.5rem;
  padding: 0.4rem;
  z-index: 2;

  border-radius: 5px;
  background: ${theme.color.white};

  box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.15);
`;

export const sortItem = (theme: Theme) => css`
  ${flexGenerator('row', 'flex-start', 'center')}
  width: 100%;
  padding: 0.8rem 0.8rem 0.8rem 1rem;
  gap: 0.2rem;

  cursor: pointer;

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
  ${theme.font['body04-m-12']};
`;
