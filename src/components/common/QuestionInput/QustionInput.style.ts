import { css, Theme } from '@emotion/react';
import { flexGenerator } from '@styles/generator';

export const questionInputStyle = css`
  ${flexGenerator('row', 'first', 'center')}
  margin: 0 2rem;
  gap: 1rem;
  position: relative;
`;

export const inputStyle = (theme: Theme) => css`
  width: 100%;
  min-width: 33.6rem;
  height: 6.4rem;
  padding: 1rem 1rem 1rem 6.4rem;
  border: none;
  border-radius: 10px;
  background-color: ${theme.color.background};
  color: ${theme.color.blackgray};
  ${theme.font['head04-b-16']};

  &:focus {
    border: 1px solid ${theme.color.purple1};
    outline: none;
  }

  &::placeholder {
    color: ${theme.color.midgray1};
    ${theme.font['subhead03-m-16']};
  }
`;

export const iconStyle = css`
  position: absolute;
  left: 1rem;
`;
