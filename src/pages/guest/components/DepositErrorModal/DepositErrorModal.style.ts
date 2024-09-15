import { Theme, css } from '@emotion/react';

import { flexGenerator } from '@styles/generator';

export const modalContainerStyle = (theme: Theme) => css`
  ${flexGenerator('column')}
  position: relative;
  z-index: 5;
  border: 1px solid ${theme.color.lightgray2};
  border-radius: 10px;
  background-color: ${theme.color.white};
`;
export const articleStyle = css`
  ${flexGenerator('column')}
  width: 27.8rem;
  gap: 2rem;
  padding: 1.8rem 1.8rem 4.9rem 1.8rem;
`;

export const headerStyle = css`
  ${flexGenerator()}
  gap: 5.1rem;
`;
export const iconStyle = css`
  width: 2.4rem;
  height: 2.4rem;
  cursor: pointer;
`;

export const mainStyle = css`
  ${flexGenerator('column')};
  width: 100%;
  gap: 1.7rem;
`;

export const titleStyle = (theme: Theme) => css`
  color: ${theme.color.blackgray};
  ${theme.font['subhead04-sb-15']}
`;

export const bodyTextStyle = (theme: Theme) => css`
  color: ${theme.color.blackgray};
  ${theme.font['body02-r-14']};
`;

export const purpleStyle = (theme: Theme) => css`
  color: ${theme.color.purple1};
  ${theme.font['body02-r-14']}
`;

export const divStyle = (theme: Theme) => css`
  width: 2.5rem;
  height: 2.5rem;
  transform: translateX(-50%) rotate(45deg);
  position: absolute;
  bottom: -1.33rem;
  left: 50%;
  background-color: ${theme.color.white};
  z-index: 6;
  border-right: 1px solid ${theme.color.lightgray2};
  border-bottom: 1px solid ${theme.color.lightgray2};
`;
