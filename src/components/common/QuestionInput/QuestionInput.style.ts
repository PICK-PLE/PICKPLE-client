import { css, Theme } from '@emotion/react';

import { flexGenerator } from '@styles/generator';

export const questionInputStyle = (theme: Theme) => css`
  ${flexGenerator('row', 'flex-start', 'center')}
  width: 100%;
  min-width: 33.6rem;
  gap: 1rem;
  padding: 1rem;
  border: none;
  border-radius: 10px;
  background-color: ${theme.color.background};
  color: ${theme.color.blackgray};
  ${theme.font['head04-b-16']};

  &:focus-within {
    border: 1px solid ${theme.color.purple1};
  }
`;

export const inputStyle = (theme: Theme) => css`
  width: 100%;
  border: none;
  background-color: ${theme.color.background};
  color: ${theme.color.blackgray};
  ${theme.font['head04-b-16']};

  &:focus {
    border: none;
    outline: none;
  }

  &::placeholder {
    color: ${theme.color.midgray1};
    ${theme.font['subhead03-m-16']};
  }
`;

export const iconStyle = css`
  width: 4.4rem;
  height: 4.4rem;
`;

export const textLengthStyle = (theme: Theme) => css`
  color: ${theme.color.midgray1};
  ${theme.font['body02-r-14']}
`;
