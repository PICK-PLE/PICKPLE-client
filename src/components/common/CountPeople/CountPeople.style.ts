import { Theme, css } from '@emotion/react';

import { flexGenerator } from '@styles/generator';

export const containerStyle = (theme: Theme) => css`
  ${flexGenerator('row', 'space-between', 'center')}
  min-width: 33.4rem;
  width: 100%;

  ${theme.font['head02-b-20']}
  ${theme.color.blackgray}
`;

export const buttonWrapperStyle = css`
  position: relative;
  display: inline-block;

  cursor: pointer;
`;

export const iconStyle = css`
  display: block;
  width: 4.8rem;
  height: 4.8rem;
`;

export const minusStyle = (people: number) => (theme: Theme) => css`
  circle {
    stroke: ${people <= 1 ? theme.color.lightgray1 : theme.color.purple1};
  }
  path {
    fill: ${people <= 1 ? theme.color.lightgray1 : theme.color.purple1};
  }

  :active {
    circle {
      fill: ${theme.color.purple6};
    }
  }
`;
export const plusStyle = (people: number) => (theme: Theme) => css`
  circle {
    stroke: ${people >= 15 ? theme.color.lightgray1 : theme.color.purple1};
  }
  path {
    fill: ${people >= 15 ? theme.color.lightgray1 : theme.color.purple1};
  }

  :active {
    circle {
      fill: ${theme.color.purple6};
    }
  }
`;

export const disabledStyle = css`
  pointer-events: none;
`;

export const peopleStyle = css`
  user-select: none;
`;
