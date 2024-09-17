import { Theme, css } from '@emotion/react';

import { flexGenerator } from '@styles/generator';

export const timeSelectContainer = css`
  ${flexGenerator()}
  gap: 1.1rem;
`;

export const timeSelectWrapper = (theme: Theme) => css`
  ${flexGenerator('column', 'center', 'flex-start')};
  width: 100%;
  padding: 1rem 1.6rem;
  gap: 0.3rem;
  border: 1px solid ${theme.color.lightgray1};
  border-radius: 10px;
`;

export const selectStyle = (hasValue: boolean) => (theme: Theme) => css`
  display: flex;
  width: 13rem;
  border: none;
  border-radius: 4px;
  color: ${hasValue ? theme.color.blackgray : theme.color.midgray1};
  ${theme.font['body01-r-15']};

  cursor: pointer;

  appearance: none;
  -webkit-appearance: none;
`;

export const textStyle = (theme: Theme) => css`
  color: ${theme.color.midgray1};
  ${theme.font['body03-r-12']};
`;

export const iconStyle = css`
  ${flexGenerator()}
  width: 2.4rem;
  height: 2.4rem;
  right: 0;
  position: absolute;

  cursor: pointer;
`;

export const labelWrapper = css`
  position: relative;
`;

export const svgStyle = (hasValue: boolean) => (theme: Theme) => css`
  path {
    fill: ${hasValue ? theme.color.blackgray : theme.color.midgray1};
  }

  width: 2.4rem;
  height: 2.4rem;
`;

export const dropdownStyle = (theme: Theme) => css`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  z-index: 1000;
  background-color: ${theme.color.white};
  border: 1px solid ${theme.color.lightgray1};
  border-radius: 10px;
  max-height: 200px;
  overflow-y: auto;
  margin-top: 0.5rem;
`;

export const optionStyle = (theme: Theme) => css`
  padding: 0.8rem 1.6rem;
  cursor: pointer;
  ${theme.font['body01-r-15']};
  color: ${theme.color.blackgray};

  &:hover {
    background-color: ${theme.color.lightgray1};
  }
`;
