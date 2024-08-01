import { Theme, css } from '@emotion/react';

import { flexGenerator } from '@styles/generator';

export const categoryButtonContainer = css`
  ${flexGenerator('column')};
  width: 5.7rem;
  gap: 0.5rem;
`;

export const categoryButtonWrapper = (isSelected: boolean) => (theme: Theme) =>
  css`
    ${flexGenerator('column')};

    height: 5.7rem;
    align-self: stretch;

    border-radius: 10px;
    background: ${isSelected ? theme.color.purple5 : theme.color.background};
    border: ${isSelected ? `1px solid ${theme.color.purple2}` : 'none'};

    color: ${theme.color.lightgray2};

    cursor: pointer;
  `;

export const categoryButtonStyle = (isSelected: boolean) => (theme: Theme) =>
  css`
    border: none;
    background: none;
    cursor: pointer;

    & span {
      fill: ${isSelected ? theme.color.purple2 : theme.color.darkgray}; /* SVG 색상 변경 */
    }
  `;

export const iconWrapper = (isSelected: boolean) => (theme: Theme) =>
  css`
    ${flexGenerator()}
    width: 3.6rem;
    height: 3.6rem;

    & svg {
      path {
        stroke: ${isSelected ? theme.color.purple2 : ''};
      }
    }
  `;

export const textStyle = (theme: Theme) => css`
  color: ${theme.color.lightgray2};
  ${theme.font['body04-m-12']}
`;
