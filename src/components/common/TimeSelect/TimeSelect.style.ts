import { Theme, css } from '@emotion/react';

import { flexGenerator } from '@styles/generator';

export const timeSelectContainer = css`
  ${flexGenerator()}
  width: 100%;
  gap: 1.1rem;
`;

export const timeSelectWrapper = (theme: Theme) => css`
  ${flexGenerator('column', 'center', 'flex-start')};
  gap: 0.3rem;
  width: 100%;
  border: 1px solid ${theme.color.lightgray1};
  border-radius: 10px;
  position: relative;

  cursor: pointer;
`;

export const labelWrapper = css`
  ${flexGenerator()};
  width: 100%;
  padding: 1rem 1.6rem;
`;

export const selectStyle = (hasValue: boolean) => (theme: Theme) => css`
  ${flexGenerator('column', 'flex-start', 'flex-start')}
  gap: 0.3rem;
  width: 100%;
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

export const svgStyle = (hasValue: boolean) => (theme: Theme) => css`
  path {
    fill: ${hasValue ? theme.color.blackgray : theme.color.midgray1};
  }

  cursor: pointer;

  width: 2.4rem;
  height: 2.4rem;
`;

export const dropdownStyle = (theme: Theme) => css`
  position: absolute;
  top: 100%;
  z-index: 1;

  background-color: ${theme.color.white};
  border: 1px solid ${theme.color.lightgray1};
  border-radius: 10px;

  width: 100%;
  max-height: 200px;
  margin-top: 0.5rem;

  overflow-y: auto;

  &::-webkit-scrollbar {
    display: block;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${theme.color.lightgray0};
    border: 5px solid ${theme.color.white};
    border-radius: 10px;
  }
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
