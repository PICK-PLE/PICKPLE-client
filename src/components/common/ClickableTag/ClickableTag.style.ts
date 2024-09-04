import { Theme, css } from '@emotion/react';

export const clickableTagContainer = (theme: Theme, isSelected: boolean) => css`
  display: inline-flex;
  padding: 0.5rem;

  border-radius: 5px;
  border: 1px solid ${theme.color.purple1};

  color: ${isSelected ? theme.color.white : theme.color.purple1};
  background-color: ${isSelected ? theme.color.purple1 : theme.color.white};
  ${theme.font['body03-r-12']}

  cursor: pointer;

  &:hover {
    background-color: ${theme.color.purple1};
    color: ${theme.color.white};
  }
`;
