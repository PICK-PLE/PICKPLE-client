import { Theme, css } from '@emotion/react';

import { flexGenerator } from '@styles/generator';

export const addAmountBoxContainer = css`
  ${flexGenerator('column')};
  gap: 1rem;
  width: 100%;
`;

export const amountBoxWrapper = css`
  width: 100%;
  ${flexGenerator('row', 'space-between')};
  gap: 1.9rem;
`;

export const wonStyle = (theme: Theme) => css`
  ${theme.font['subhead01-sb-18']};
  color: ${theme.color.darkgray};
`;

export const addBoxWrapper = css`
  width: 100%;
  ${flexGenerator('row', 'flex-start')};
  gap: 1rem;
`;

export const addButtonStyle = (theme: Theme) => css`
  ${flexGenerator()};

  width: 5.6rem;
  height: 3.7rem;

  border: none;
  border-radius: 10px;

  ${theme.font['body01-r-15']};

  background-color: ${theme.color.purple6};
  color: ${theme.color.purple1};

  white-space: nowrap;

  cursor: pointer;
`;
